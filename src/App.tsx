import { Navigation } from './components/Navigation'
import { Button } from './components/Button/Button'
import { CodeSnippet } from './components/CodeSnippet'
import { Input } from './components/Input/Input'

function App (): JSX.Element {
  return (
    <>
      <div className='container mx-auto flex'>
        <Navigation />
        <div className='pl-[10.5rem]'>
          <article id='buttons'>
            <h2 className='text-3xl pt-10'>Buttons</h2>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-8 my-10'>
              <div>
                <CodeSnippet content='<Button />' />
                <Button color='default'>
                  Default
                </Button>
              </div>
              <div>
                <CodeSnippet content='&:hover, &:focus' />
                <Button color='default'>
                  Default
                </Button>
              </div>
            </section>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-8 my-10'>
              <div>
                <CodeSnippet content='<Button variant=outline />' />
                <Button variant='outline'>
                  Default
                </Button>
              </div>
              <div>
                <CodeSnippet content='&:hover, &:focus' />
                <Button variant='outline'>
                  Default
                </Button>
              </div>
            </section>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-8 my-10'>
              <div>
                <CodeSnippet content='<Button variant=outline />' />
                <Button variant='text'>
                  Default
                </Button>
              </div>
              <div>
                <CodeSnippet content='&:hover, &:focus' />
                <Button variant='text'>
                  Default
                </Button>
              </div>
            </section>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-8 my-10'>
              <div>
                <CodeSnippet content='<Button disableShadow />' />
                <Button disableShadow color='primary'>
                  Default
                </Button>
              </div>
            </section>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-8 my-10'>
              <div>
                <CodeSnippet content='<Button disabled />' />
                <Button disabled>
                  Default
                </Button>
              </div>
              <div>
                <CodeSnippet content='<Button variant=”text” disabled />' />
                <Button variant='text' disabled>
                  Default
                </Button>
              </div>
            </section>
            <section className='grid grid-cols-1 md:grid-cols-2 items-center gap-8 my-10'>
              <div>
                <CodeSnippet content='<Button startIcon=”fa-solid fa-heart” />' />
                <Button startIcon='fa-solid fa-heart'>
                  Default
                </Button>
              </div>
              <div>
                <CodeSnippet content='<Button endIcon=”fa-solid fa-heart” />' />
                <Button endIcon='fa-solid fa-heart'>
                  Default
                </Button>
              </div>
            </section>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-8 my-10'>
              <div>
                <CodeSnippet content='<Button size="sm" />' />
                <Button size='sm' color='primary'>
                  Default
                </Button>
              </div>
              <div>
                <CodeSnippet content='<Button size="md" />' />
                <Button size='md' color='primary'>
                  Default
                </Button>
              </div>
              <div>
                <CodeSnippet content='<Button size="lg" />' />
                <Button size='lg' color='primary'>
                  Default
                </Button>
              </div>
            </section>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-8'>
              <div>
                <CodeSnippet content='<Button color="default" />' />
                <Button color='default'>
                  Default
                </Button>
              </div>
              <div>
                <CodeSnippet content='<Button color="primary" />' />
                <Button color='primary'>
                  Primary
                </Button>
              </div>
              <div>
                <CodeSnippet content='<Button color="secondary" />' />
                <Button color='secondary'>
                  Secondary
                </Button>
              </div>
              <div>
                <CodeSnippet content='<Button color="danger" />' />
                <Button color='danger'>
                  Danger
                </Button>
              </div>
            </section>
          </article>
          <article id='inputs'>
            <h2 className='text-3xl pt-10'>Inputs</h2>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-8 my-10'>
              <div>
                <CodeSnippet content='<Input />' />
                <Input />
              </div>
              <div>
                <CodeSnippet content='&:hover' />
                <Input />
              </div>
              <div>
                <CodeSnippet content='&:focus' />
                <Input />
              </div>
            </section>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-8 my-10'>
              <div>
                <CodeSnippet content='<Input  error/>' />
                <Input error />
              </div>
              <div>
                <CodeSnippet content='&:hover' />
                <Input error />
              </div>
              <div>
                <CodeSnippet content='&:focus' />
                <Input error />
              </div>
            </section>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-8 my-10'>
              <div>
                <CodeSnippet content='<Input disabled />' />
                <Input disabled />
              </div>
            </section>
            <section className='grid grid-cols-1 md:grid-cols-2 items-center gap-8 my-10'>
              <div>
                <CodeSnippet content='<Input helperText="Some interesting text"/>' />
                <Input helperText='Some interesting text' />
              </div>
              <div>
                <CodeSnippet content='<Input helperText="Some interesting text" error />' />
                <Input helperText='Some interesting text' error />
              </div>
            </section>
          </article>
        </div>
      </div>
      <footer className='text-gray-1 py-10 text-center'>created by <b>quiiroz</b> - devChallenges.io</footer>
    </>

  )
}

export default App
