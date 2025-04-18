import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinFontIcon],svg[catppuccin-font-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#f0c6c6" stroke-linecap="round" stroke-linejoin="round" d="m7 5l4 8.5h2.5L8 2.5l-4.5 11m-1 0h2m5 0h5m-9-4H9"></svg:path>`,
})
export class CatppuccinFontIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
