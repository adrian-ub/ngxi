import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTimeIcon],svg[carbon-time-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14m0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4"></svg:path><svg:path fill="currentColor" d="M20.59 22L15 16.41V7h2v8.58l5 5.01z"></svg:path>`,
})
export class CarbonTimeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
