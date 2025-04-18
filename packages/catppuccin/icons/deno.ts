import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinDenoIcon],svg[catppuccin-deno-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#cad3f5" stroke-linecap="round" stroke-linejoin="round" d="M1.5 8a6.5 6.5 0 1 0 13 0a6.5 6.5 0 0 0-13 0m7.67 5.8L8.11 9.56C6.2 9.49 4.5 8.38 4.5 7.03c0-1.4 1.62-2.53 3.61-2.53c2 0 2.89.72 3.61 2.17c.02.03.5 1.6 1.45 4.7M8.5 6.5"></svg:path>`,
})
export class CatppuccinDenoIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
