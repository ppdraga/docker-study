
Without compose:

docker build --tag visits_web .

docker run --rm --network="host" redis

docker run --rm --name visits_web --network="host" visits_web


