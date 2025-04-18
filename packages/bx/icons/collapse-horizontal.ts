import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxCollapseHorizontalIcon],svg[bx-collapse-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.95 5.64L13.59 12l6.36 6.36l1.41-1.41L16.41 12l4.95-4.95zM2.64 7.05L7.59 12l-4.95 4.95l1.41 1.41L10.41 12L4.05 5.64z"></svg:path>`,
})
export class BxCollapseHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
