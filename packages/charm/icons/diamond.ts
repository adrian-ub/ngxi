import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmDiamondIcon],svg[charm-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1.25 8L8 14.75L14.75 8L8 1.25z"></svg:path>`,
})
export class CharmDiamondIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
