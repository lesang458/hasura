SET check_function_bodies = false;
CREATE TABLE public.long_tails (
    tail text NOT NULL,
    json_id integer NOT NULL
);
CREATE SEQUENCE public.long_tails_json_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.long_tails_json_id_seq OWNED BY public.long_tails.json_id;
ALTER TABLE ONLY public.long_tails ALTER COLUMN json_id SET DEFAULT nextval('public.long_tails_json_id_seq'::regclass);
ALTER TABLE ONLY public.long_tails
    ADD CONSTRAINT long_tails_pkey PRIMARY KEY (json_id);
