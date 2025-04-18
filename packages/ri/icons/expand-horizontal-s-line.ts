import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riExpandHorizontalSLineIcon],svg[ri-expand-horizontal-s-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.45 7.05L2.5 12l4.947 4.947l1.414-1.414L6.328 13h11.343l-2.535 2.535l1.414 1.414L21.5 12l-4.95-4.95l-1.414 1.415L17.672 11H6.328l2.536-2.535z"></svg:path>`,
})
export class RiExpandHorizontalSLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
