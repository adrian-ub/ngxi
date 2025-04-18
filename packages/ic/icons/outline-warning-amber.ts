import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineWarningAmberIcon],svg[ic-outline-warning-amber-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5.99L19.53 19H4.47zM12 2L1 21h22zm1 14h-2v2h2zm0-6h-2v4h2z"></svg:path>`,
})
export class IcOutlineWarningAmberIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
