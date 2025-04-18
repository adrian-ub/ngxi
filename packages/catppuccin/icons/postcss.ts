import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinPostcssIcon],svg[catppuccin-postcss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#ed8796" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M14.5 8A6.5 6.5 0 0 1 8 14.5A6.5 6.5 0 0 1 1.5 8A6.5 6.5 0 0 1 8 1.5A6.5 6.5 0 0 1 14.5 8"></svg:path><svg:path d="m8 1.5l6 9H2z"></svg:path><svg:path d="M5.5 5.5h5v5h-5z"></svg:path><svg:path d="M9.5 8A1.5 1.5 0 0 1 8 9.5A1.5 1.5 0 0 1 6.5 8A1.5 1.5 0 0 1 8 6.5A1.5 1.5 0 0 1 9.5 8"></svg:path></svg:g>`,
})
export class CatppuccinPostcssIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
