const knex = require('../config/knex')

module.exports = {
    async save (req, res) {
        const {title, category, content} = req.body

        if (!title || !category || !content) {
            return res.send("Informe os dados corretamente")
        }

        const categoryDb = await knex('categories').where({name: category}).first()

        if (!categoryDb) {
            const newCategory = {name: category}
            await knex('categories')
                    .insert(newCategory)
                    .then()
                    .catch(err => res.send(err))

            const newCategoryDb = await knex('categories').where({name: category}).first()

            const noticia = {title, content, category_id: newCategoryDb.id}

            await knex('news2')
                    .insert(noticia)
                    .then(() => res.send('Notícia criada'))
                    .catch(err => res.send(err))

        } else {
            const noticia = {title, content, category_id: categoryDb.id}

            await knex('news2')
                    .insert(noticia)
                    .then(() => res.send('Notícia criada'))
                    .catch(err => res.send(err))
        }
    },

    async get (req, res) {
        var categories = []
        var noticias = []

        await knex('categories')
            .select('id', 'name')
            .then(cat => categories = cat)

        await knex('news2')
            .select('id', 'title', 'content', 'category_id')
            .then( news => noticias = news)
            .catch(err => res.send(err))

        const newsWithCategories = noticias.map(noticia => {
            var categoryName = ''
            
            categories.forEach(category => {
                if (category.id == noticia.category_id) {
                    categoryName = category.name
                }
            })
            return {...noticia, categoria: categoryName}
        })

        res.json(newsWithCategories)
    }

}


