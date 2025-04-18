import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineBorderStyleIcon],svg[ic-baseline-border-style-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 21h2v-2h-2zm4 0h2v-2h-2zM7 21h2v-2H7zm4 0h2v-2h-2zm8-4h2v-2h-2zm0-4h2v-2h-2zM3 3v18h2V5h16V3zm16 6h2V7h-2z"></svg:path>`,
})
export class IcBaselineBorderStyleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
