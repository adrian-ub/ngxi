import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinRacketIcon],svg[catppuccin-racket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#8aadf4" d="M13.11 12.01A6.5 6.5 0 0 0 5.77 1.9c2.65 1.38 6.14 5.9 7.34 10.12h0Z"></svg:path><svg:path stroke="#ed8796" d="M7.07 5.65A11.3 11.3 0 0 0 3.72 3.1a6.48 6.48 0 0 0-.61 9.17c.88-2.65 2.54-5.2 3.96-6.63Zm1.2 1.47a15.15 15.15 0 0 0-3.32 6.62a6.47 6.47 0 0 0 6.18-.04a17.9 17.9 0 0 0-2.86-6.58"></svg:path></svg:g>`,
})
export class CatppuccinRacketIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
