import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsTransferLongLeftIcon],svg[lets-icons-transfer-long-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M22 14H10v3.565a.2.2 0 0 1-.33.152L3 12l6.67-5.717a.2.2 0 0 1 .33.152V10h12"></svg:path>`,
})
export class LetsIconsTransferLongLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
