import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmTriangleIcon],svg[charm-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8 2.75l-6.25 11.5h12.5z"></svg:path>`,
})
export class CharmTriangleIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
