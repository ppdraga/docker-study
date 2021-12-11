

redis debug:

docker run --rm -p 6379:6379 redis
redisClient.set('key', 'value', function(err, reply) {
  console.log(reply);
});
redisClient.get('key', (err, m) => console.log(m))


debug server:

curl -i -X POST -H "Content-Type: application/json" -d '{"index": "5"}' http://127.0.0.1:5000/values
curl -i http://127.0.0.1:5000/values/current
curl -i http://127.0.0.1:5000/values/all


create react app:
npx create-react-app client
run react app:
npm run start


build client:
docker build --file Dockerfile.dev --tag fib_client .

build server:
docker build --file Dockerfile.dev --tag fib_server .

build client:
docker build --file Dockerfile.dev --tag fib_worker .


docker build --tag mynginx .
docker run --rm --network="host" mynginx


build for kube:

worker:
cd complex/worker
docker build --tag ppdraga/multi-worker .


add secret:
kubectl create secret generic pgpassword --from-literal PGPASSWORD=postgres

