import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons7MinuteWorkoutIcon],svg[arcticons-7-minute-workout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="18.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.125 12.536h15.75L19.082 35.465M35.75 3.648a23.5 23.5 0 0 1 8.602 8.602"></svg:path>`,
})
export class Arcticons7MinuteWorkoutIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
