const ex = require('express');
const path = require('path');

const app = ex();
const PORT = process.env.PORT || 5000;

// Set a static folder
app.use(ex.static(path.join(__dirname, '/public')));



app.listen(PORT, () => {
    console.log(`Server started on Port ${PORT}`)
});