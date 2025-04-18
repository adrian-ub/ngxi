import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagMk4x3Icon],svg[flag-mk-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d20000" d="M0 0h640v480H0z"></svg:path><svg:path fill="#ffe600" d="M0 0h96l224 231.4L544 0h96L0 480h96l224-231.4L544 480h96zm640 192v96L0 192v96zM280 0l40 205.7L360 0zm0 480l40-205.7L360 480z"></svg:path><svg:circle cx="320" cy="240" r="77.1" fill="#ffe600" stroke="#d20000" stroke-width="17.1"></svg:circle>`,
})
export class FlagMk4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
