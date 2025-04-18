import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMacbookFillIcon],svg[ri-macbook-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4.007C2 3.45 2.455 3 2.992 3h18.016c.548 0 .992.45.992 1.007V17H2zM1 19h22v2H1z"></svg:path>`,
})
export class RiMacbookFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
