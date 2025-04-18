import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riExpandWidthFillIcon],svg[ri-expand-width-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6v12h2V6zm7.45 1.05L4.5 12l4.947 4.947L9.448 13h5.102v3.95L19.5 12l-4.95-4.95V11h-5.1zM20 6h2v12h-2z"></svg:path>`,
})
export class RiExpandWidthFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
