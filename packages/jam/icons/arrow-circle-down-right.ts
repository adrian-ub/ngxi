import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamArrowCircleDownRightIcon],svg[jam-arrow-circle-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m.414-6.172l-3.95-3.95A1 1 0 0 1 7.88 6.465l3.95 3.95V6.828a1 1 0 0 1 2 0v6a.997.997 0 0 1-1 1h-6a1 1 0 1 1 0-2z"></svg:path>`,
})
export class JamArrowCircleDownRightIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
