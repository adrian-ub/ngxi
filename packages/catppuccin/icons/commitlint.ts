import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinCommitlintIcon],svg[catppuccin-commitlint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#7dc4e4" d="M4.5 9.23c-.74.49-2.04.3-2.59-.45a2.21 2.21 0 0 1 0-2.58c.56-.74 1.85-.92 2.59-.42M5.5 4h1v4.4s-.14 1.12.93 1.1H8.5"></svg:path><svg:path stroke="#ed8796" d="M10.5 9.51h4m-4 3.99l2-2l2 2"></svg:path></svg:g>`,
})
export class CatppuccinCommitlintIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
