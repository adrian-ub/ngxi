import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsTransferLeftIcon],svg[lets-icons-transfer-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M19 15h-7v3.517a.2.2 0 0 1-.341.142L5 12l6.659-6.659a.2.2 0 0 1 .341.142V9h7"></svg:path>`,
})
export class LetsIconsTransferLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
