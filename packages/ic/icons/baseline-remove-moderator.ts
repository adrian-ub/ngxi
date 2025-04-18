import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineRemoveModeratorIcon],svg[ic-baseline-remove-moderator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.27 21.73l-3.54-3.55L5.78 5.23L2.27 1.72L1 2.99L3.01 5H3v6c0 5.55 3.84 10.74 9 12c2.16-.53 4.08-1.76 5.6-3.41L21 23zM13 9.92l6.67 6.67C20.51 14.87 21 12.96 21 11V5l-9-4l-5.48 2.44L11 7.92z"></svg:path>`,
})
export class IcBaselineRemoveModeratorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
