import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinSublimeIcon],svg[catppuccin-sublime-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#f5a97f" stroke-linecap="round" stroke-linejoin="round" d="m13.5 11.5l-11 3v-3l6.29-1.71M2.5 4.5l11-3v3L7.21 6.21m6.29 5.29v-3l-11-4v3z"></svg:path>`,
})
export class CatppuccinSublimeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
