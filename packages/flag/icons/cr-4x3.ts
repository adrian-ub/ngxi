import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagCr4x3Icon],svg[flag-cr-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd" stroke-width="1pt"><svg:path fill="#0000b4" d="M0 0h640v480H0z"></svg:path><svg:path fill="#fff" d="M0 75.4h640v322.3H0z"></svg:path><svg:path fill="#d90000" d="M0 157.7h640v157.7H0z"></svg:path></svg:g>`,
})
export class FlagCr4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
