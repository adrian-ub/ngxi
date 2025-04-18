import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinVitestIcon],svg[catppuccin-vitest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#a6da95" d="m14.5 8.5l-6.5 6l-6.5-6"></svg:path><svg:path stroke="#eed49f" d="M7.5 11.5L8 8L5 7l4.5-5.5L9 5l3 1z"></svg:path></svg:g>`,
})
export class CatppuccinVitestIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
