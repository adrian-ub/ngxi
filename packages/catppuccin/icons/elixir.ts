import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinElixirIcon],svg[catppuccin-elixir-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#c6a0f6" stroke-linecap="round" stroke-linejoin="round" d="M8.03 14.5C5 14.5 3.5 12.49 3.5 10.01c0-2.82 2.25-7.02 4.62-8.48a.24.24 0 0 1 .24 0c.08.04.12.12.11.2c-.13 1.25.22 2.5.98 3.54c.3.43.63.8 1.02 1.27c.54.66.94 1.03 1.52 2.08l.01.02c.33.56.5 1.2.5 1.84c0 2.03-1.69 4.02-4.47 4.02"></svg:path>`,
})
export class CatppuccinElixirIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
