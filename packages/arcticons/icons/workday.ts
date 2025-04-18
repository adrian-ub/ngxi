import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWorkdayIcon],svg[arcticons-workday-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.92 16.3C14.13.566 32.69.566 38.08 16.3M9.92 24.082L16.259 43.5l7.484-19.418l7.14 19.418l7.197-19.418"></svg:path>`,
})
export class ArcticonsWorkdayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
