export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
        this.load()
    }

    load() {
        this.entries = [
            {
                login: 'maykbrito',
                name: 'Mayk Brito',
                public_repos: '76',
                followers: '120000'
            },
            {
                login: 'diego3g',
                name: 'Diego Fernanedes',
                public_repos: '76',
                followers: '120000'
            }
        ]

    }

    delete(user) {
        const filteresEntries = this.entries.filter(entry => entry.login !== user.login)

        console.log(filteresEntries)
    }
}

export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)

        this.tbody = this.root.querySelector('table tbody')

        this.update()
    }

    update() {
        this.removeAllTr()

        this.entries.forEach(user => {
            const row = this.createRow()
            console.log(row)

            row.querySelector('.user img').src = `https://github.com/${user.login}.png`
            row.querySelector('.user img').alt = `Image de ${user.name}`
            row.querySelector('.user p').textContent = user.name
            row.querySelector('.user span').textContent = user.login
            row.querySelector('.repositories').textContent = user.public_repos
            row.querySelector('.followers').textContent = user.followers

            row.querySelector('.remove').onclick = () => {
                const isOk = confirm('Tem certeza que deseja deletar a linha?')
                if (isOk) {
                    this.delete(user)
                }

            }

            this.tbody.append(row)
        })


    }

    createRow() {
        const tr = document.createElement('tr')

        tr.innerHTML = `
    
    <td class="user">
        <img src="https://github.com/vinizbjj.png" alt="">
        <a href="http://github.com/vinizbjj" target="_blank">
            <p>Vinicius Oliveira</p>
            <span>Vinizbjj</span>
    </td>
    <td class="repositories">
        30
    </td>
    <td class="followers">
        28
    </td>
    <td>
        <button class="remove">&times;</button>
    </td>

`

        return tr
    }

    removeAllTr() {


        this.tbody.querySelectorAll('tr')
            .forEach((tr) => {
                tr.remove()
            })
    }
}