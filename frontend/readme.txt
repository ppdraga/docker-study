
npx create-react-app frontend

docker build --file Dockerfile.dev --tag frontend .
docker run --rm -p 3000:3000 --name frontend frontend

-v $(pwd):/app

docker run --rm -p 3000:3000 --name frontend -v /app/node_modules -v $(pwd):/app frontend


EACCES: permission denied, mkdir '/app/node_modules/.cache'

docker run --rm -p 3000:3000 --name frontend -v $(pwd)/src:/app/src -v $(pwd)/public:/app/public frontend


docker build --file Dockerfile.dev --tag frontend_prod .
docker run --rm -p 80:80 --name frontend_prod frontend_prod

for tests in some CI:
docker run --rm -e CI=true -p 3000:3000 --name frontend -v $(pwd)/src:/app/src -v $(pwd)/public:/app/public frontend npm run test -- --coverage
