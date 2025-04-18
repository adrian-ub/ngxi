import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinLuaIcon],svg[catppuccin-lua-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#cad3f5" d="M10.5 7A1.5 1.5 0 0 1 9 8.5A1.5 1.5 0 0 1 7.5 7A1.5 1.5 0 0 1 9 5.5A1.5 1.5 0 0 1 10.5 7"></svg:path><svg:path stroke="#8aadf4" d="M7 2.5a6.5 6.5 0 1 0 0 13a6.5 6.5 0 0 0 0-13m7-2a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"></svg:path></svg:g>`,
})
export class CatppuccinLuaIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
