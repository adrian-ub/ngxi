import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamArrowCircleUpLeftIcon],svg[jam-arrow-circle-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m-.414-9.828l3.95 3.95a1 1 0 0 1-1.415 1.414l-3.95-3.95v3.586a1 1 0 0 1-2 0v-6a.997.997 0 0 1 1-1h6a1 1 0 0 1 0 2z"></svg:path>`,
})
export class JamArrowCircleUpLeftIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
