import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTrainTimetableItalyIcon],svg[arcticons-train-timetable-italy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.25 22.5h31.5M18 37.5l-4.5 6m16.5-6l4.5 6m-21.75-39h22.5a4.5 4.5 0 0 1 4.5 4.5v24a4.5 4.5 0 0 1-4.5 4.5h-22.5a4.5 4.5 0 0 1-4.5-4.5V9a4.5 4.5 0 0 1 4.5-4.5"></svg:path><svg:circle cx="15.75" cy="30" r=".75" fill="currentColor"></svg:circle><svg:circle cx="32.25" cy="30" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsTrainTimetableItalyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
