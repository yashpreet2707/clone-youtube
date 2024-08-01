import React, {useEffect, useState} from 'react'
import { YOUTUBE_COMMENT_THREAD_API } from '../utils/constants';
import { useSearchParams } from 'react-router-dom';
import CommentCard from './CommentCard';


const CommentContainer = () => {

  const [searchParams] = useSearchParams() ;

  const [CommentData, setCommentData] = useState([]) ;
  const [Error, setError] = useState(null)
  const [Loading, setLoading] = useState(true) ;
  useEffect( ()=> {

    const commentThreadData = async () => {

      try {
        const data = await fetch(YOUTUBE_COMMENT_THREAD_API + searchParams.get('v'))

        if ( !data.ok ) {
          throw new Error("Network response was not okay")
        }

        const json = await data.json() ;
        setCommentData(json.items)
        setLoading(false)
      } catch (err) {
          setError(err);
      }
       
    }

    commentThreadData() ;
  }, [])
  
  if (Loading) {
    return <div>Loading...</div>
  }
  if (Error) {
    return <div>Error: {Error.message}</div>
  }
  if (!CommentData || CommentData.length === 0 ) {
    return <div>No Comments found</div>
  }

  return (
    <div>
      <CommentCard data={CommentData[8].snippet.topLevelComment} />
    </div>
  )
}

export default CommentContainer