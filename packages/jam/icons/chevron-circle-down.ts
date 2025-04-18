import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamChevronCircleDownIcon],svg[jam-chevron-circle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0-6.172l3.536-3.535a1 1 0 0 1 1.414 1.414l-4.243 4.243a1 1 0 0 1-1.414 0L5.05 9.707a1 1 0 0 1 1.414-1.414z"></svg:path>`,
})
export class JamChevronCircleDownIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
