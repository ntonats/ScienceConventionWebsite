import React from "react"

const infoData = [
  {time: '8:30–9:00', title: 'Virtual coffee'},
  {time: '9:00–9:05', title: 'Say ‘hi’ to fellow attendees in our virtual lounge'},
  {time: '9:05–9:30', title: "How We've Designed Accessible and Equitable Healthcare"},
  {time: '9:35–10:00', title: 'How to Use the Power of UX Writing to Bring Your Products to Life'},
  {time: '10:05–10:30', title: 'How to Uncover User Thinking Patterns for Better IA Design'},
  {time: '10:35–11:00', title: 'How We Run Remote Design Sprints at Google'},
  {time: '11:05–11:30', title: 'How to Conduct Diary Studies in UX Research'},
  {time: '11:35–11:45', title: 'Pub Design Quiz'},
  {time: '11:50–12:15', title: 'When Playing Back Users’ Data, Context is Key'},
]

const SpeechInfo = () => {
  return (
    <>
      <ul>
        {infoData.map((item, index) => (
          <li key={index}>{item.time} : {item.title}</li>
        ))}
      </ul>
    </>
  )
}

export default SpeechInfo
