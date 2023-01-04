//  by simplyme#9265
(() => {
  let points = 0
  let fourPoint = 0
  let credits = 0

  const ninePoints = {
    'A+' : 9.0,
    'A'  : 8.0,
    'B+' : 7.0,
    'B'  : 6.0,
    'C+' : 5.0,
    'C'  : 4.0,
    'D+' : 3.0,
    'D'  : 2.0,
    'E'  : 1.0,
    'F'  : 0.0,
  }

  const fourPoints = {
    'A+' : 4.0,
    'A'  : 3.8,
    'B+' : 3.3,
    'B'  : 3.0,
    'C+' : 2.3,
    'C'  : 2.0,
    'D+' : 1.3,
    'D'  : 1.0,
    'E'  : 0.7,
    'F'  : 0.0,
  }

  const rows = document.querySelector('table.bodytext').rows
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i]
    const [,courseCell,,gradeCell] = row.cells

    const weight = Number(courseCell.innerText.split(' ')[3])
    const grade = gradeCell.innerText.trim()

    if (!!grade && grade !== 'P' && ninePoints.hasOwnProperty(grade)) {
      points += ninePoints[grade] * weight
      fourPoint += fourPoints[grade] * weight
      credits += weight
    }
  }

  alert(`GPA: ${(points / credits).toFixed(3)} (9 point)\nGPA: ${(fourPoint / credits).toFixed(3)} (4 point)`)
})()
