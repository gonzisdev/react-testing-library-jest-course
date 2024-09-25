import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router"
import RepositoriesListItem from "./RepositoriesListItem"

jest.mock('../tree/FileIcon', () => {

    // Content of FileIcon.js
    return () => {
        return 'File Icon Component' //<- NOW IT WILL RENDER THIS INSTEAD OF THE COMPONENT
    }
})

function renderComponent() {
    const repository = {
        full_name: 'facebook/react',
        language: 'Javascript', 
        description: 'A js library',
        owner: 'facebook', 
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
    renderComponent()
    // await screen.findByRole('img', {name: 'Javascript'})
    

})

// const pause = () => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve()
//         }, 100)
//     })
// }

// act:
// it('Should return some text', () => {
//     act(() => {
//       render(<TestComponent />, container);
//     });
  
//     expect(container.textContent).toBe('some text');
//   })