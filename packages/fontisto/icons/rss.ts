import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoRssIcon],svg[fontisto-rss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.017 12.754h.029c3.078 0 5.863 1.257 7.869 3.286l.001.001a11.16 11.16 0 0 1 3.274 7.911v.041v-.002h4.6v-.014C15.79 15.255 8.734 8.18.018 8.151H.015zm0-8.155c10.664.045 19.291 8.699 19.291 19.369v.033v-.002h4.602v-.026C23.91 10.764 13.227.049.029-.001H.024v4.6zm6.357 16.186v.002a3.186 3.186 0 1 1-3.186-3.186h.011h-.001a3.186 3.186 0 0 1 3.176 3.185z"></svg:path>`,
})
export class FontistoRssIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
