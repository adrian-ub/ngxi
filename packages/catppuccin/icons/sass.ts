import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinSassIcon],svg[catppuccin-sass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#f5bde6" stroke-linecap="round" stroke-linejoin="round" d="M6.75 6.38c1.85 1.07 3.35.74 4.83-.2c1.5-.95 2.7-2.78 1.3-4.15c-.7-.68-3.25-.8-5.62.19c-2.36.99-4.59 3.02-4.74 4.11c-.31 2.19 3.15 2.88 3.64 4.23s.28 1.98-.2 2.83c-.5.85-1.96 1.62-2.8.68c-.83-.95 1.67-2.75 2.98-3.25c1.3-.5 3.1-.4 3.69.25c.58.64-.07 1.79-.03 1.79"></svg:path>`,
})
export class CatppuccinSassIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
