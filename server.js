// ESM
import Fastify from 'fastify'
const fastify = Fastify({
    logger: true
})
const PORT = process.env.port || 3000;

import query from './database.js';


fastify.get('/geoip/v1/city/:ip', async (request, reply) => {
    let ip = request.params.ip;
    let pretty = request.query.pretty;
    
    const response = await query(ip);
    return pretty != undefined ? JSON.stringify(response, null, 2) : response;
})

/**
 * Run the server!
 */
const start = async () => {
    try {
        await fastify.listen({ port: PORT })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()