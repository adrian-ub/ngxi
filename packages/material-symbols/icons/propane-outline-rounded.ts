import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPropaneOutlineRoundedIcon],svg[material-symbols-propane-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 16h10q1.65 0 2.825-1.175T21 12t-1.175-2.825T17 8H7Q5.35 8 4.175 9.175T3 12t1.175 2.825T7 16m3-10h4V5h-4zM9 18v2q0 .425-.288.713T8 21t-.712-.288T7 20v-2q-2.5 0-4.25-1.75T1 12t1.75-4.25T7 6h1V5q0-.825.588-1.412T10 3h4q.825 0 1.413.588T16 5v1h1q2.5 0 4.25 1.75T23 12t-1.75 4.25T17 18v2q0 .425-.288.713T16 21t-.712-.288T15 20v-2z"></svg:path>`,
})
export class MaterialSymbolsPropaneOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
