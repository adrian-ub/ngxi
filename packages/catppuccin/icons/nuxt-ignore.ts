import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinNuxtIgnoreIcon],svg[catppuccin-nuxt-ignore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#8087a2" stroke-linecap="round" stroke-linejoin="round" d="M9.5 12.5h6l-5-7L7.44 11c-.67.98-1.32 1.48-1.94 1.5h-5l5-9l3 5"></svg:path>`,
})
export class CatppuccinNuxtIgnoreIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
