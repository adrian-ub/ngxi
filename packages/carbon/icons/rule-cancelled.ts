import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonRuleCancelledIcon],svg[carbon-rule-cancelled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 24a6 6 0 1 0-6 6a6.007 6.007 0 0 0 6-6m-2 0a3.95 3.95 0 0 1-.567 2.019l-5.452-5.452A3.95 3.95 0 0 1 24 20a4.005 4.005 0 0 1 4 4m-8 0a3.95 3.95 0 0 1 .567-2.019l5.452 5.452A3.95 3.95 0 0 1 24 28a4.005 4.005 0 0 1-4-4M8 16h10v2H8zm0-6h12v2H8z"></svg:path><svg:path fill="currentColor" d="m14 27.733l-5.234-2.79A8.99 8.99 0 0 1 4 17V4h20v11h2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13a10.98 10.98 0 0 0 5.824 9.707L14 30Z"></svg:path>`,
})
export class CarbonRuleCancelledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
