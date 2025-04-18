import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinEslintIgnoreIcon],svg[catppuccin-eslint-ignore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#8087a2" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.71 1.5L15.42 8l-3.71 6.5H4.29L.58 8l3.71-6.5z"></svg:path><svg:path d="m8 4.07l3.5 1.97v3.92L8 11.93L4.5 9.96V6.04z"></svg:path></svg:g>`,
})
export class CatppuccinEslintIgnoreIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
