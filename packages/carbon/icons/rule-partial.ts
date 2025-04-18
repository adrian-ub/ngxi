import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonRulePartialIcon],svg[carbon-rule-partial-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 16c-3.9 0-7 3.1-7 7s3.1 7 7 7s7-3.1 7-7s-3.1-7-7-7m0 12V18c2.8 0 5 2.2 5 5s-2.2 5-5 5M8 16h6v2H8zm0-6h12v2H8z"></svg:path><svg:path fill="currentColor" d="M26 4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v13c0 4.1 2.2 7.8 5.8 9.7l5.2 2.8v-2.3l-4.2-2.3C5.8 23.4 4 20.3 4 17V4h20v9h2z"></svg:path>`,
})
export class CarbonRulePartialIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
