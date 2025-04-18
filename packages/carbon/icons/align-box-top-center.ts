import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonAlignBoxTopCenterIcon],svg[carbon-align-box-top-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 30H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2M6 4v24h20V4Z"></svg:path><svg:path fill="currentColor" d="M22 9H10V7h12zm-2 5h-8v-2h8z"></svg:path>`,
})
export class CarbonAlignBoxTopCenterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
