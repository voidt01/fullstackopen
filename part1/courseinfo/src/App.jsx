const Header = ({ name }) => {
  // console.log(name)
  return(
    <>
      <h1>{name}</h1>
    </>
  )
}

const Part = ({ parts }) => {
  return(
    <>
      <p>{parts.name} {parts.exercises}</p>
    </>
  )
}

const Content = ({ course }) =>{
  return(
    <>
      <Part parts={course[0]}/>
      <Part parts={course[1]}/>
      <Part parts={course[2]}/>
    </>
  )
}

const Total = ({ exercises }) => {
  // console.log(exercises)
  return(
    <>
      <p>Number of exercises {exercises[0].exercises + exercises[1].exercises + exercises[2].exercises}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <>
      <Header name={course.name}/>
      <Content course={course.parts}/>
      <Total exercises={course.parts}/> 
    </>
  )
}

export default App