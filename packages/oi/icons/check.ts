import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiCheckIcon],svg[oi-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.41 1l-.69.72L2.94 4.5l-.81-.78L1.41 3L0 4.41l.72.72l1.5 1.5l.69.72l.72-.72l3.5-3.5l.72-.72z"></svg:path>`,
})
export class OiCheckIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
