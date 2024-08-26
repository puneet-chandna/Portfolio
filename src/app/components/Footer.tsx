import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Puneet Chandna. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <Link href="https://github.com/puneet-chandna" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
              GitHub
            </Link>
            <Link href="https://linkedin.com/in/puneet-chandna2004" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
              LinkedIn
            </Link>
            <Link href="https://x.com/puneet_chandna_" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
              X
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}