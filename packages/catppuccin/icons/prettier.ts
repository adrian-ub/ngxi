import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinPrettierIcon],svg[catppuccin-prettier-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#7dc4e4" d="M1.5 2.5h11m-11 6h5"></svg:path><svg:path stroke="#eed49f" d="M1.5 4.5h5m3 4h5"></svg:path><svg:path stroke="#c6a0f6" d="M9.5 4.5h5m-13 2h5m-5 6h5"></svg:path><svg:path stroke="#ed8796" d="M9.5 6.5h5m-13 4h11m-11 4h5"></svg:path></svg:g>`,
})
export class CatppuccinPrettierIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
