import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagSr4x3Icon],svg[flag-sr-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#377e3f" d="M.1 0h640v480H.1z"></svg:path><svg:path fill="#fff" d="M.1 96h640v288H.1z"></svg:path><svg:path fill="#b40a2d" d="M.1 144h640v192H.1z"></svg:path><svg:path fill="#ecc81d" d="m320 153.2l56.4 173.6l-147.7-107.3h182.6L263.6 326.8z"></svg:path>`,
})
export class FlagSr4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
