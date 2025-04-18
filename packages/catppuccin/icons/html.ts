import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinHtmlIcon],svg[catppuccin-html-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#f5a97f" d="M1.5 1.5h13L13 13l-5 2l-5-2z"></svg:path><svg:path stroke="#cad3f5" d="M11 4.5H5l.25 3h5.5l-.25 3l-2.5 1l-2.5-1l-.08-1"></svg:path></svg:g>`,
})
export class CatppuccinHtmlIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
