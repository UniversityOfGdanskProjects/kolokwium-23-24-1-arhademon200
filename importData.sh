docker run -d -p 27017:27017 --name mongo-stepik mongo

docker cp A/products.json mongo-stepik:/tmp/
docker cp A/customers.json mongo-stepik:/tmp/
docker cp A/orders.json mongodb:/customers.json

docker exec -it mongo-stepik mongoimport --jsonArray --file=/tmp/products.json --collection=Products
docker exec -it mongo-stepik mongoimport --jsonArray --file=/tmp/customers.json --collection=Customers 
docker exec -it mongo-stepik mongoimport --jsonArray --file=/tmp/orders.json --collection=Orders
