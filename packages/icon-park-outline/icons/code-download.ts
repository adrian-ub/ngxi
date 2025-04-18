import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineCodeDownloadIcon],svg[icon-park-outline-code-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M16 12L4 24.432L16 36m16-24l12 12.432L32 36"></svg:path><svg:path d="M24 17v14"></svg:path><svg:path stroke-linejoin="round" d="m18 25l6 6l6-6"></svg:path></svg:g>`,
})
export class IconParkOutlineCodeDownloadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
