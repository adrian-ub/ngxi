import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsTransferLongRightIcon],svg[lets-icons-transfer-long-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M2 10h12V6.435a.2.2 0 0 1 .33-.152L21 12l-6.67 5.717a.2.2 0 0 1-.33-.152V14H2"></svg:path>`,
})
export class LetsIconsTransferLongRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
