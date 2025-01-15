import { Button } from '@/components/ui/button';
import { APP_NAME } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';

const NotFoundPage = () => {
    return ( 
        <div className="flex flex-col items-center justify-center min-h-screen">
            <Image src="/images/logo.svg" width={48} height={48} alt={APP_NAME} priority={true}/>
            <div className='p-8  rounded-lg shadow-md text-center'>
                <h1 className='text-3xl font-bold mb-4'>404 Not Found</h1>
                <p className=' mb-4'>Could not find requested page</p>
                <Button asChild>
                    <Link href="/">
                    Back to home
                    </Link>
                </Button>
            </div>
        </div>
     );
}
 
export default NotFoundPage;