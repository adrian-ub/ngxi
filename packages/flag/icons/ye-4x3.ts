import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagYe4x3Icon],svg[flag-ye-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd" stroke-width="1pt"><svg:path fill="#fff" d="M0 0h640v472.8H0z"></svg:path><svg:path fill="#f10600" d="M0 0h640v157.4H0z"></svg:path><svg:path fill="#000001" d="M0 322.6h640V480H0z"></svg:path></svg:g>`,
})
export class FlagYe4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
