import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinSvgIcon],svg[catppuccin-svg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#f5a97f" stroke-linecap="round" stroke-linejoin="round" d="m4.54 10l6.92-4m-6.92 4a1.5 1.5 0 1 0-2.6 1.5a1.5 1.5 0 0 0 2.6-1.5M8 4v8m0-8a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M4.54 6l6.92 4M4.54 6a1.5 1.5 0 1 0-2.6-1.5A1.5 1.5 0 0 0 4.54 6M8 12a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m3.46-2a1.5 1.5 0 1 0 2.6 1.5a1.5 1.5 0 0 0-2.6-1.5m0-4a1.5 1.5 0 1 0 2.6-1.5a1.5 1.5 0 0 0-2.6 1.5"></svg:path>`,
})
export class CatppuccinSvgIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
