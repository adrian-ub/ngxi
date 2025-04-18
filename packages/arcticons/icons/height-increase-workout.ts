import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHeightIncreaseWorkoutIcon],svg[arcticons-height-increase-workout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.662 43.5V15.542h4.575L24 4.5L13.763 15.542h4.575V43.5m5.04-24.884h6.284M23.378 30h6.284m-6.284 11.836h6.284M25.5 21.462h4.162M25.5 24.308h4.162M25.5 27.154h4.162M25.5 32.96h4.162M25.5 35.918h4.162M25.5 38.877h4.162"></svg:path>`,
})
export class ArcticonsHeightIncreaseWorkoutIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
