import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonRuleFilledIcon],svg[carbon-rule-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M9 16h14v2H9zm0-6h14v2H9z"></svg:path><svg:path fill="currentColor" d="M26 2H6a2 2 0 0 0-2 2v13a10.98 10.98 0 0 0 5.824 9.707L16 30l6.176-3.293A10.98 10.98 0 0 0 28 17V4a2 2 0 0 0-2-2m-3 16H9v-2h14Zm0-6H9v-2h14Z"></svg:path>`,
})
export class CarbonRuleFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
