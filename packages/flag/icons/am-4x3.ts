import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagAm4x3Icon],svg[flag-am-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d90012" d="M0 0h640v160H0z"></svg:path><svg:path fill="#0033a0" d="M0 160h640v160H0z"></svg:path><svg:path fill="#f2a800" d="M0 320h640v160H0z"></svg:path>`,
})
export class FlagAm4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
