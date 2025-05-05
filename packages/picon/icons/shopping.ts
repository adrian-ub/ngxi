import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconShoppingIcon],svg[picon-shopping-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2V0h4v2H5V1H3v1m2 1v1h1V3M2 3v1h1V3M1 8L0 7V2h8v5L7 8"></svg:path>`,
})
export class PiconShoppingIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
