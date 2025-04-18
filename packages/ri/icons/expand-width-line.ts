import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riExpandWidthLineIcon],svg[ri-expand-width-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 18V6h2v12zM9.45 7.05L4.5 12l4.947 4.947l1.415-1.414L8.328 13h7.343l-2.535 2.535l1.414 1.414L19.5 12l-4.95-4.95l-1.414 1.415L15.672 11H8.328l2.536-2.536zM20 6h2v12h-2z"></svg:path>`,
})
export class RiExpandWidthLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
