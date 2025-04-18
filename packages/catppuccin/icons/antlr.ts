import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinAntlrIcon],svg[catppuccin-antlr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#f5a97f" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5 8a6.5 6.5 0 1 0 13 0a6.5 6.5 0 0 0-13 0"></svg:path><svg:path d="m8 9.5l3 1l-3-6l-3 6"></svg:path></svg:g>`,
})
export class CatppuccinAntlrIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
