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
  if (day === DayWeeks.SAT || day === DayWeeks.SUN) { return true }
  else return false;
}
