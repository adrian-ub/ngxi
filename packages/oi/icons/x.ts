import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiXIcon],svg[oi-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.41 0L0 1.41l.72.72L2.5 3.94L.72 5.72L0 6.41l1.41 1.44l.72-.72l1.81-1.81l1.78 1.81l.69.72l1.44-1.44l-.72-.69l-1.81-1.78l1.81-1.81l.72-.72L6.41 0l-.69.72L3.94 2.5L2.13.72z"></svg:path>`,
})
export class OiXIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
