
interface CodeSnippetProps {
  content: string
}

export const CodeSnippet: React.FC<CodeSnippetProps> = ({ content }) => {
  return (
    <p className='mb-2'>
      <code>{content}</code>
    </p>
  )
}
