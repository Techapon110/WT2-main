import { useAuth } from '../contexts/AuthContext'

function Home() {
  const { claims } = useAuth()
  return (
    <div className='container flex gap-4 flex-col justify-center items-center bg-blue-100'>
      <p className="text-blue-500 text-4xl font-bold">Home</p>
      { !claims ? "not login" : claims?.email }
    </div>
  )
}
 
export default Home


