import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconDrinkIcon],svg[picon-drink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 8H3L2 2h5M1 1V0h3v2H3V1"></svg:path>`,
})
export class PiconDrinkIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
