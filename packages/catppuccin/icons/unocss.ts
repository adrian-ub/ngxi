import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinUnocssIcon],svg[catppuccin-unocss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#8087a2" d="M9 12a3 3 0 1 1 6 0a3 3 0 0 1-6 0"></svg:path><svg:path stroke="#cad3f5" d="M7 12c0 1.75-1.25 3-3 3s-3-1.25-3-3V9h6zm2-8c0-1.75 1.25-3 3-3s3 1.25 3 3v3H9Z"></svg:path></svg:g>`,
})
export class CatppuccinUnocssIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
