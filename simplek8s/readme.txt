

install kubectl:

curl -LO https://storage.googleapis.com/kubernetes-release/release/`curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt`/bin/linux/amd64/kubectl
chmod +x ./kubectl
sudo mv ./kubectl /usr/local/bin/kubectl
kubectl version --client

or

sudo apt-get update && sudo apt-get install -y apt-transport-https
curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -
echo "deb https://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee -a /etc/apt/sources.list.d/kubernetes.list
sudo apt-get update
sudo apt-get install -y kubectl


install minikube:

curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube
minikube start
minikube status

run pod or something
kubectl apply -f client_pod.yaml

delete pod or something:
kubectl delete -f client_pod.yaml

update image in deployment:
kubectl set image deployment/client-deployment client=ppdraga/multi-client:v5


Connect docker-cli to minikube docker-daemon:
eval $(mimikube docker-env)
docker ps


ingress minikube install:
minikube addons enable ingress

check ingress:
kubectl get pods --namespace=ingress-nginx

