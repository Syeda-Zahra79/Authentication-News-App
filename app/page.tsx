
import { auth } from './lib/auth'
import { redirect } from 'next/navigation'

export default async function Home() {
    const session = await auth()
    if(!session) {
      redirect('/api/auth/signin')
    } else {
      redirect('/main')
    }

  return (
    <main>
      <h1>hi there!</h1>
    </main>
  )
}
