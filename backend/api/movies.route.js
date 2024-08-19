import express from 'express'

const router = express.Router()

router.route('/').get((req, res) => res.send('hello, new atlantica'))

export default router;