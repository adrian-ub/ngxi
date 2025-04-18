import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTsqIcon],svg[carbon-tsq-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 26h11v2H19zm0-4h11v2H19zm11-2H19v-8h11zm-9-2h7v-4h-7zM19 8h11v2H19zm0-4h11v2H19zm-8.707 14.707L8 16.414V12h2v3.586l1.707 1.707z"></svg:path><svg:path fill="currentColor" d="M9 24c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8m0-14c-3.308 0-6 2.692-6 6s2.692 6 6 6s6-2.692 6-6s-2.692-6-6-6"></svg:path>`,
})
export class CarbonTsqIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
