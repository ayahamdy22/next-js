import Link from 'next/link'
import React from 'react'


function ArticlesPages() {
  
  return (
    <div>
      <h3>Articles Pge</h3>
      <Link href='/posts'>
        <button>Take Me To The Posts Page</button>
      </Link>
    </div>
  )
}

export default ArticlesPages
