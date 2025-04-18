import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagDk1x1Icon],svg[flag-dk-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#c8102e" d="M0 0h512.1v512H0z"></svg:path><svg:path fill="#fff" d="M144 0h73.1v512H144z"></svg:path><svg:path fill="#fff" d="M0 219.4h512.1v73.2H0z"></svg:path>`,
})
export class FlagDk1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
