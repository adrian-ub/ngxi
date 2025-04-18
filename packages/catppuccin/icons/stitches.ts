import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinStitchesIcon],svg[catppuccin-stitches-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#cad3f5" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m6.23 14.25l8.08-4.66M4.09 13.18l6.9-3.99L8.59 5"></svg:path><svg:path d="M7.54 11.2L5.1 6.96l6.96-4.01"></svg:path><svg:path d="M14.5 8A6.5 6.5 0 0 1 8 14.5A6.5 6.5 0 0 1 1.5 8A6.5 6.5 0 0 1 8 1.5A6.5 6.5 0 0 1 14.5 8M1.66 6.64L10 1.83M6.85 6.01l2.4 4.14"></svg:path></svg:g>`,
})
export class CatppuccinStitchesIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
