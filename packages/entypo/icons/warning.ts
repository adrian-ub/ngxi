import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoWarningIcon],svg[entypo-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.511 17.98L10.604 1.348a.697.697 0 0 0-1.208 0L.49 17.98a.68.68 0 0 0 .005.68c.125.211.352.34.598.34h17.814a.7.7 0 0 0 .598-.34a.68.68 0 0 0 .006-.68M11 17H9v-2h2zm0-3.5H9V7h2z"></svg:path>`,
})
export class EntypoWarningIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
