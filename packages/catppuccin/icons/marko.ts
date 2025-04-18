import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinMarkoIcon],svg[catppuccin-marko-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#ed8796" d="m12 13.5l3.5-5l-3.5-6"></svg:path><svg:path stroke="#8aadf4" d="m4 2.5l-3.47 6l3.47 5"></svg:path><svg:path stroke="#8bd5ca" d="M6.43 8.5L4 2.5"></svg:path><svg:path stroke="#a6da95" d="m9 2.5l-2.57 6"></svg:path><svg:path stroke="#eed49f" d="m9 13.5l3.51-5L9 2.5"></svg:path></svg:g>`,
})
export class CatppuccinMarkoIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
