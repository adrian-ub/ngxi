import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feDiamondIcon],svg[fe-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 17.876l6.626-7.952L16.164 5H7.836L5.374 9.924zM6.6 3h10.8l3.6 7.2L12 21L3 10.2z"></svg:path>`,
})
export class FeDiamondIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
