import { QuestionCard } from '../QuestionCard'
import cls from './QuestionCardList.module.css'

export const QuestionCardList = ({cards}) => {
  return (
    <div className={cls.cardList}>
        {
            cards.map((item, index) => {
            return <QuestionCard card = {item} key = {index}/>
        })
        }
    </div>
  )
}
