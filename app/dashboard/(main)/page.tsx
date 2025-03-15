import { auth } from '@/auth';
import SignoutButton from '@/ui/signout-form';

export default async function Page() {
    const session = await auth();
    const id = session?.user?.id;
    const name = session?.user?.name;
    const email = session?.user?.email;
    
    return (
        <div>
            <p>Dashboard (protected)</p>
            <p>Currently logged in as:</p>
            <ul>
                <li><p>id: {id}</p></li>
                <li><p>name: {name}</p></li>
                <li><p>email: {email}</p></li>
            </ul>
            <SignoutButton />
        </div>
    );
  }
  