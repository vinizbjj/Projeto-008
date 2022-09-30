export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
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
}


export class FavoresView extends Favorites {
    constructor(root) {
        super(root)

        this.update()
    }

    update() {
        this.removeAllTr()



        entries.forEach(user => {
            console.log(user)
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
        const tbody = this.root.querySelector('table tbody')

        tbody.querySelectorAll('tr')
            .forEach((tr) => {
                tr.remove()
            })
    }
}