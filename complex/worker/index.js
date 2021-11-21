const keys = require('./keys');
const redis = require('redis');

const redisClient = redis.createClient({
    host: keys.redisHost,
    port: parseInt(keys.redisPort),
    retry_strategy: () => 1000
});

const sub = redisClient.duplicate();

function fib(index) {
    if (index < 2) return 1;
    return fib(index - 1) + fib(index - 2);
}

sub.on('message', (cannel, message) => {
    let calculatedValue = fib(parseInt(message));
    redisClient.hset('values', message, calculatedValue);
});
sub.subscribe('insert');