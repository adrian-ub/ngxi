import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinCargoIcon],svg[catppuccin-cargo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="#f5a97f" stroke-linejoin="round"><svg:path stroke-linecap="round" d="M1.5 7L8 10.5L14.5 7m-10-2.5l3.503 2L14.498 3M4.5 5.5v7m3.5-6V14"></svg:path><svg:path stroke-linecap="round" d="M8.003 3L11.5 4.5v8"></svg:path><svg:path stroke-linecap="square" d="M1.5 6.984V11l6.503 3.5L14.5 11V3L11 1.5l-6.5 3v1z"></svg:path></svg:g>`,
})
export class CatppuccinCargoIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
