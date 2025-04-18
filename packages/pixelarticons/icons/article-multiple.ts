import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsArticleMultipleIcon],svg[pixelarticons-article-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1H1v18h18V1zm14 2v14H3V3zm4 18H5v2h18V5h-2zM15 5H5v2h10zM5 9h10v2H5zm7 4H5v2h7z"></svg:path>`,
})
export class PixelarticonsArticleMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
