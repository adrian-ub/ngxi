import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinEjsIcon],svg[catppuccin-ejs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#a6da95" stroke-linecap="round" stroke-linejoin="round" d="M5.5 13.5L.5 8l5-5.5m2.99 11l6.01-11M9 5.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m5 8a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path>`,
})
export class CatppuccinEjsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
