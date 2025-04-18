import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons7mWorkoutIcon],svg[arcticons-7m-workout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="38.041" cy="13.692" r="3.991" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="41.508" cy="28.885" r="3.991" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="31.792" cy="41.069" r="3.991" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="16.208" cy="41.069" r="3.991" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="6.492" cy="28.885" r="3.991" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="9.959" cy="13.692" r="3.991" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="6.93" r="3.991" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class Arcticons7mWorkoutIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
