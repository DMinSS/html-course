const express = require('express')
const cors = require('cors')
const path = require('path')
const PORT = process.env.PORT || 5000

const options = {
    dotfiles: 'ignore',
    extensions: ['html', 'htm'],
    maxAge: '30m'
}

express()
    .use(cors())
    .use(express.static(path.join(__dirname, 'public'), options))
    .listen(PORT, () => console.log(`Listening on ${PORT}`))