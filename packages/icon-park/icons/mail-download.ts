import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMailDownloadIcon],svg[icon-park-mail-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10 18H4V42H44V18H38"></svg:path><svg:path fill="#2F88FF" d="M38 6H10V22.5L24 33L38 22.5V6Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10 22.5L24 33L38 22.5M10 22.5V6H38V22.5M10 22.5L4 18M38 22.5L44 18"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19 19L24 24M24 24L29 19M24 24V13"></svg:path></svg:g>`,
})
export class IconParkMailDownloadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
