import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmSquareCrossIcon],svg[charm-square-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m10.25 5.75l-4.5 4.5m0-4.5l4.5 4.5m-7.5-7.5h10.5v10.5H2.75z"></svg:path>`,
})
export class CharmSquareCrossIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
