import { API_URL } from '../../API'
import cls from './HomePage.module.css'
import { useState, useEffect, useRef } from 'react'
import { QuestionCardList } from '../../Components/QuestionCardList'
import { Loader } from '../../Components/Loader'
import { useFetch } from '../../hooks/useFetch'
import { SearchInput } from '../../Components/SearchInput/SearchInput'


export const HomePage = () => {
  const [Questions, setQuestions] = useState([])
  const [searchValue, setSearchValue] = useState('')

  const [getQuestions, IsLoading, error] = useFetch( async(url) => {
    const response = await fetch(`${API_URL}/${url}`)
    const Questions = await response.json()

    setQuestions(Questions)
    return Questions
  })
useEffect(() => {
  getQuestions('react')
}, [])
const onSearchChangeHandler = (e) => {
  setSearchValue(e.target.value)
}
  return (
    <>
    <div className={cls.controlsContainer}>
     <SearchInput value={searchValue} onChange={onSearchChangeHandler}/>
    </div>
    {IsLoading && <Loader />}
    <QuestionCardList cards={Questions} />
    {error && <p>{error}</p>}
    </>
  )
}
