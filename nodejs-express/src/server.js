const express = require("express");
const bodyParser = require("body-parser");
const jsonData = require('./data.json');

const app = express();
const fetch = require("node-fetch");


const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());

app.post('/tails', async (req, res) => {
  const session_variables = req.body.session_variables;

  const LONG_TAILS_QUERY = `query {
    long_tails {
      json_id
    }
  }`;

  const fetchLongTails = await fetch(
    'http://localhost:8080/v1/graphql',
    {
      method: 'POST',
      body: JSON.stringify({
        query: LONG_TAILS_QUERY,
      }),
      headers: session_variables
    }
  );
  const { data, errors } = await fetchLongTails.json();

  if(errors) {
    return res.status(400).json({
      message: "error happened"
    })
  }

  const results = data.long_tails.map(tail => {
    const data = jsonData.find(item => item.id === tail.json_id);
    return {
      title: `${data.title}`,
      description: `${data.description}`
    };
  })

  return res.json(results);
});

app.listen(PORT);
