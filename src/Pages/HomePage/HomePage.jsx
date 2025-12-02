import { API_URL } from '../../API'
import cls from './HomePage.module.css'
import { useState, useEffect } from 'react'
import { QuestionCardList } from '../../Components/QuestionCardList'
import { Loader } from '../../Components/Loader'
import { useFetch } from '../../hooks/useFetch'


export const HomePage = () => {

  const [Questions, setQuestions] = useState([])

  const [getQuestions, IsLoading, error] = useFetch( async(url) => {
    const response = await fetch(`${API_URL}/${url}`)
    const Questions = await response.json()

    setQuestions(Questions)
    return Questions
  })
useEffect(() => {
  getQuestions('react')
}, [])
  return (
    <>
    {IsLoading && <Loader />}
    <QuestionCardList cards={Questions} />
    {error && <p>{error}</p>}
    </>
  )
}
