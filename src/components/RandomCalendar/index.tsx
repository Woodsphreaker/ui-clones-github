import React from 'react'
import {
  subYears,
  subMonths,
  differenceInYears,
  getDaysInMonth,
  getMonth,
  getYear,
} from 'date-fns'
import Heatmap from 'react-calendar-heatmap'

import { Container, Wrapper } from './styles'

const random = (min: number = 1, max: number = 10) => {
  return Math.floor(Math.random() * (max - min) + min)
}

const generateMonthValues = (month: Date) => {
  const daysInMonth: number = getDaysInMonth(month)
  return Array.from({ length: daysInMonth }, (_, day: number) => {
    return {
      date: new Date(getYear(month), getMonth(month), day),
      count: random(1, 6),
    }
  })
}

const generateHeatmapValues = (startDate: Date) => {
  const years = differenceInYears(new Date(), startDate)
  const months: number = years * 12

  const data: number[] = Array.from({ length: months }, (_, index) => index + 1)

  const newData = data.reduce((acc: object[], month: number) => {
    const retroMonth: Date = subMonths(new Date(), month + 1)
    return [...acc, ...generateMonthValues(retroMonth)]
  }, [])

  return newData
}

const getClassForValue = (item: { count: number }) => {
  if (item) {
    const { count } = item
    return count > 4 ? 'scale-4' : `scale-${count}`
  }

  return 'scale-0'
}

const RandomCalendar: React.FC = () => {
  const startDate = subYears(new Date(), 1)
  const endDate = new Date()

  return (
    <Container>
      <Wrapper>
        <Heatmap
          startDate={startDate}
          endDate={endDate}
          values={generateHeatmapValues(startDate)}
          gutterSize={3.5}
          showWeekdayLabels
          classForValue={getClassForValue}
        />
      </Wrapper>
      <span>Random calendar (do not represent actual data)</span>
    </Container>
  )
}

export default RandomCalendar
