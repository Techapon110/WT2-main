import Counter from '../components/Counter'

function Home() {
  return (
    <div className='container flex gap-4 flex-col justify-center items-center bg-blue-100'>
      <p className="text-blue-500 text-4xl font-bold">Home</p>
      <Counter />
    </div>
  )
}
 
export default Home


