import { useState, useEffect } from "react";




export default function useFecth(url, options) {
  const [loading, set_loading] = useState(true)
  const [result, set_result] = useState(null)
  const [error, set_error] = useState(null)

  useEffect(function() {
    (async function() {
      try {
        const response = await fetch(url, options)
        const jsonParsedToObject = await response.json()
        set_result(jsonParsedToObject)
        
        set_loading(false)
      } catch (error) {
        set_error(error)
        set_loading(false)
      }
    })()
  }, [options, url])



  return { loading, result, error}
}