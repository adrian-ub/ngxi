import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsArticleSearchIcon],svg[majesticons-article-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h8.257a5.48 5.48 0 0 1-1.235-4H7a1 1 0 1 1 0-2h5.6a5.5 5.5 0 0 1 1.92-2.123A1 1 0 0 1 15 11h2a1 1 0 0 1 1 1.022a5.5 5.5 0 0 1 4 2.315V6a3 3 0 0 0-3-3zm1 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm2 1v2h2V9zm6-1a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsArticleSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
