import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinCmakeIcon],svg[catppuccin-cmake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#a6da95" d="m6 11.5l-3.5 3H13Z"></svg:path><svg:path stroke="#ed8796" d="m9 1.5l5.5 11l-4.5-2z"></svg:path><svg:path stroke="#8aadf4" d="m1.5 12.5l6-5l-.5-6Z"></svg:path></svg:g>`,
})
export class CatppuccinCmakeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
