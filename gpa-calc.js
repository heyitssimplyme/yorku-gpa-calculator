//  by simplyme#9265
(() => {
  const byLetterGrade = {
    'A+': { nine: 9.0, four: 4.0 },
    'A' : { nine: 8.0, four: 3.8 },
    'B+': { nine: 7.0, four: 3.3 },
    'B' : { nine: 6.0, four: 3.0 },
    'C+': { nine: 5.0, four: 2.3 },
    'C' : { nine: 4.0, four: 2.0 },
    'D+': { nine: 3.0, four: 1.3 },
    'D' : { nine: 2.0, four: 1.0 },
    'E' : { nine: 1.0, four: 0.7 },
    'F' : { nine: 0.0, four: 0.0 },
  }

  // Skip the first row (header)
  const rows = Array.from(document.querySelector('table.bodytext').rows).slice(1)

  const { ninePoint, fourPoint, credits } = rows.reduce((acc, row) => {
    const [,courseCell,,gradeCell] = row.cells
  
    const weight = Number(courseCell.innerText.split(' ')[3])
    const grade = gradeCell.innerText.trim()
  
    if (Boolean(grade) && grade !== 'P' && byLetterGrade.hasOwnProperty(grade)) {
      const { nine, four } = byLetterGrade[grade]
  
      acc.ninePoint += nine * weight
      acc.fourPoint += four * weight
      acc.credits += weight
    }
  
    return acc
  }, { ninePoint: 0, fourPoint: 0, credits: 0 })

  const ninePointGpa = ninePoint / credits
  const fourPointGpa = fourPoint / credits

  alert(`9 Point GPA: ${ninePointGpa.toFixed(3)}\n4 Point GPA: ${fourPointGpa.toFixed(3)}`)
})()
