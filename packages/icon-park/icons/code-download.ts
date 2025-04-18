import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCodeDownloadIcon],svg[icon-park-code-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M16 12L4 24.4322L16 36"></svg:path><svg:path stroke-linejoin="round" d="M32 12L44 24.4322L32 36"></svg:path><svg:path d="M24 17V31"></svg:path><svg:path stroke-linejoin="round" d="M18 25L24 31L30 25"></svg:path></svg:g>`,
})
export class IconParkCodeDownloadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
