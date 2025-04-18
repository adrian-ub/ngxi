import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDirectionRotaryFirstRightIcon],svg[carbon-direction-rotary-first-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 18v6.586L15.871 14.457A5.92 5.92 0 0 0 17 11a6 6 0 1 0-7 5.91V28h2V16.91a5.96 5.96 0 0 0 2.455-1.04L24.585 26H18v2h10V18Zm-15-3a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4"></svg:path>`,
})
export class CarbonDirectionRotaryFirstRightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
