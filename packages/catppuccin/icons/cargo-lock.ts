import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinCargoLockIcon],svg[catppuccin-cargo-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path stroke="#8087a2" d="M14.998 11.5a.5.5 0 0 1 .5.5v2.999a.5.5 0 0 1-.5.5H10a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5zM11 11.5V10a1.5 1.5 0 0 1 3 0v1.5"></svg:path><svg:path stroke="#f5a97f" stroke-linecap="round" stroke-linejoin="round" d="m.5 6l6 2.996l6-3.498m-9-2.001l3 2.003L12.498 2M3.5 4v7m3-5.502V12.5"></svg:path><svg:path stroke="#f5a97f" stroke-linecap="round" stroke-linejoin="round" d="M6.499 2.5L9.5 4v3"></svg:path><svg:path stroke="#f5a97f" stroke-linecap="round" stroke-linejoin="round" d="M12.498 5.5V2L9.538.5L3.5 3.5v.997l-3 1.501v3.54l6 2.962"></svg:path></svg:g>`,
})
export class CatppuccinCargoLockIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
