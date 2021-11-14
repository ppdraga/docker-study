


docker build --file Dockerfile.dev --tag frontend .
docker run --rm -p 3000:3000 --name frontend frontend

-v $(pwd):/app

docker run --rm -p 3000:3000 --name frontend -v /app/node_modules -v $(pwd):/app frontend


EACCES: permission denied, mkdir '/app/node_modules/.cache'

docker run --rm -p 3000:3000 --name frontend -v $(pwd)/src:/app/src -v $(pwd)/public:/app/public frontend


