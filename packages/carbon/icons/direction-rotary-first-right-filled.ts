import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDirectionRotaryFirstRightFilledIcon],svg[carbon-direction-rotary-first-right-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="11" cy="11" r="3" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M28 2H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m-2 24H16v-2h6.586l-8.833-8.833a5 5 0 0 1-1.753.732V26h-2V15.899a5.011 5.011 0 1 1 5.167-2.146L24 22.586V16h2Z"></svg:path><svg:path fill="none" d="M11 14a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3m13 2v6.586l-8.833-8.833A4.996 4.996 0 1 0 10 15.899V26h2V15.899a5 5 0 0 0 1.753-.732L22.586 24H16v2h10V16Z"></svg:path>`,
})
export class CarbonDirectionRotaryFirstRightFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
