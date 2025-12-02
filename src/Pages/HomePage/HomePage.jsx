import { API_URL } from '../../API'
import cls from './HomePage.module.css'
import { useState, useEffect } from 'react'
import { QuestionCardList } from '../../Components/QuestionCardList'
import { Loader } from '../../Components/Loader'


export const HomePage = () => {

  const [Questions, setQuestions] = useState([])

  const getQuestions = async () => {
    try{
      const response = await fetch(`${API_URL}/react`)
      const Questions = await response.json()
      setQuestions(Questions)
      console.log('questions', Questions)
    }
    catch(e){
      console.error(`Warning: ${e}`)
    }
  }
useEffect(() => {
  getQuestions()
}, [])
  return (
    <>
    <Loader />
    <QuestionCardList cards={Questions} />
    </>
  )
}
