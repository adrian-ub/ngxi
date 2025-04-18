import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineWarningAmberIcon],svg[ic-baseline-warning-amber-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5.99L19.53 19H4.47zM12 2L1 21h22z"></svg:path><svg:path fill="currentColor" d="M13 16h-2v2h2zm0-6h-2v5h2z"></svg:path>`,
})
export class IcBaselineWarningAmberIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
