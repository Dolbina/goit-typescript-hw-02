/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum DayWeeks{
  SUN,
  MON,
  TUE,
  WED,
  THU,
  FRI,
  SAT
}

function isWeekend(day: DayWeeks): boolean {
return day === DayWeeks.SAT || day === DayWeeks.SUN
  
}
