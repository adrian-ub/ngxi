import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpRemoveModeratorIcon],svg[ic-sharp-remove-moderator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 11.09V5l-8-3l-5.22 1.96l12.09 12.09c.72-1.53 1.13-3.22 1.13-4.96M2.81 2.81L1.39 4.22L4 6.83v4.26c0 5.05 3.41 9.76 8 10.91c1.72-.43 3.28-1.36 4.55-2.62l3.23 3.23l1.41-1.41z"></svg:path>`,
})
export class IcSharpRemoveModeratorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
