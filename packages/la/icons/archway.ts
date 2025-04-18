import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laArchwayIcon],svg[la-archway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6v6h2v12H3v2h10v-7c0-1.654 1.346-3 3-3s3 1.346 3 3v7h10v-2h-2V12h2V6zm2 2h22v2H5zm2 4h18v12h-4v-5c0-2.757-2.243-5-5-5s-5 2.243-5 5v5H7z"></svg:path>`,
})
export class LaArchwayIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
