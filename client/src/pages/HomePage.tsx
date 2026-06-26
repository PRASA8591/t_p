import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <main className='container'>
      <h1>MiHCM Enterprise</h1>
      <p>Welcome to the MERN HR platform placeholder. Use the dashboard to view HR modules.</p>
      <nav>
        <Link to='/dashboard'>Go to Dashboard</Link>
      </nav>
    </main>
  )
}
