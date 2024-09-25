import { render, screen, act } from "@testing-library/react"
import { MemoryRouter } from "react-router"
import RepositoriesListItem from "./RepositoriesListItem"

// GOOD IDEA IF A COMPONENT IS CAUSING TROUBLE WITHIN A COMPONENT WE ARE TESTING 
// jest.mock('../tree/FileIcon', () => {
//     // Content of FileIcon.js
//     return () => {
//         return 'File Icon Component' //<- NOW IT WILL RENDER THIS INSTEAD OF THE COMPONENT
//     }
// })

function renderComponent() {
    const repository = {
        full_name: 'facebook/react',
        language: 'Javascript', 
        description: 'A js library',
        owner: {
            login: 'facebook'
        }, 
        name: 'react',
        html_url: 'https://github.com/facebook/react'
    }
    render(
        <MemoryRouter>
            <RepositoriesListItem repository={repository} />
        </MemoryRouter>
    )
}

test('shows a link to the github homepage for this repository', async () => {
    const { repository } = renderComponent()
    await screen.findByRole('img', {name: 'Javascript'})
    // screen.debug()

    // TRY NOT TO USE THIS SOLUTION
    // await act(async () => {
    //     await pause()
    // })


    //const link = screen.getByRole('link')
    const link = screen.getByRole('link', {name: /github repository/i})
    expect(link).toHaveAttribute('href', repository.html_url)

})

// const pause = () => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve()
//         }, 100)
//     })
// }


test('shows a fileicon with the appropiate icon', async () => {
    renderComponent()
    await screen.findByRole('img', {name: 'Javascript'})
    expect(icon).toHaveClass('js-icon')
})

test('shows a link to the code editor page', async () => {
    const { repository } = renderComponent()
    await screen.findByRole('img', {name: 'Javascript'})
    const link = await screen.findByRole('link', {name: new RegExp(repository.owner.login)})
    expect(link).toHaveAttribute('href', `/repositories/${repository.full_name}`)
})
