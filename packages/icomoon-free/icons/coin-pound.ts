import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeCoinPoundIcon],svg[icomoon-free-coin-pound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 1a7.5 7.5 0 1 0 0 15a7.5 7.5 0 0 0 0-15m0 13.5a6 6 0 1 1 0-12a6 6 0 0 1 0 12"></svg:path><svg:path fill="currentColor" d="M9.5 11H6V9h1.5a.5.5 0 0 0 0-1H6v-.5a1.502 1.502 0 0 1 2.8-.75a.499.499 0 1 0 .865-.501A2.51 2.51 0 0 0 7.5 4.999a2.503 2.503 0 0 0-2.5 2.5v.5h-.5a.5.5 0 0 0 0 1H5v3h4.5a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class IcomoonFreeCoinPoundIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
