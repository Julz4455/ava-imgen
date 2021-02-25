module.exports = {
  apps : [
      {
        name: "Ava Imgen",
        script: "pipenv run gunicorn -w 24 -b 0.0.0.0:65535 -k gevent server:app",
        watch: false,
      }
  ]
}
