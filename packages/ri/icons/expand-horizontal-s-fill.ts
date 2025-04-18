import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riExpandHorizontalSFillIcon],svg[ri-expand-horizontal-s-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.45 7.05L2.5 12l4.947 4.947L7.448 13h9.102v3.95L21.5 12l-4.95-4.95V11h-9.1z"></svg:path>`,
})
export class RiExpandHorizontalSFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
