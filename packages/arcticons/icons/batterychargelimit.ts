import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBatterychargelimitIcon],svg[arcticons-batterychargelimit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.5 4.5h6.67a1 1 0 0 1 1 1v3h4.63a2 2 0 0 1 2 2v31a2 2 0 0 1-2 2H15.19a2 2 0 0 1-2-2v-31a2 2 0 0 1 2-2h4.31v-3a1 1 0 0 1 1-1m-7.31 14.09H34.8M19.5 8.5h8.67"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 23.43a7.8 7.8 0 0 1-3.88 1a7.5 7.5 0 0 1-1.94-.25v9.35c0 2 2.33 3.78 5.82 5.24c3.49-1.74 5.82-3.2 5.82-5.24v-9.3a8 8 0 0 1-1.94.25A7.66 7.66 0 0 1 24 23.43m0 .01v15.38m-5.82-7.69h11.64"></svg:path>`,
})
export class ArcticonsBatterychargelimitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
