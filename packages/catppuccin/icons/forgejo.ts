import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinForgejoIcon],svg[catppuccin-forgejo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#f5a97f" d="M12.58 1.877a1.345 1.377 0 0 1-1.345 1.377A1.345 1.377 0 0 1 9.89 1.877A1.345 1.377 0 0 1 11.235.5a1.345 1.377 0 0 1 1.345 1.377m-7.619 10.87V5.709c0-2.114 1.672-3.827 3.734-3.827H9.89"></svg:path><svg:path stroke="#ed8796" d="M6.305 14.13a1.345 1.377 0 0 1-1.345 1.377a1.345 1.377 0 0 1-1.345-1.377a1.345 1.377 0 0 1 1.345-1.377a1.345 1.377 0 0 1 1.345 1.377m6.273-7.038a1.345 1.377 0 0 1-1.345 1.377a1.345 1.377 0 0 1-1.345-1.377a1.345 1.377 0 0 1 1.345-1.377a1.345 1.377 0 0 1 1.345 1.377m-7.619 5.664v-1.837c0-2.114 1.672-3.827 3.734-3.827h1.195"></svg:path></svg:g>`,
})
export class CatppuccinForgejoIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
