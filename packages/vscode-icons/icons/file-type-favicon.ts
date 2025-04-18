import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeFaviconIcon],svg[vscode-icons-file-type-favicon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="vscodeIconsFileTypeFavicon0" x1="-66.775" x2="-66.775" y1="-171.703" y2="-171.817" gradientTransform="matrix(240 0 0 -240 16042 -41206)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#ec790f"></svg:stop><svg:stop offset="1" stop-color="#f51032"></svg:stop></svg:lineargradient></svg:defs><svg:rect width="28" height="28" x="2" y="2" fill="url(#vscodeIconsFileTypeFavicon0)" rx="1.75" ry="1.75"></svg:rect><svg:path fill="#fff" d="m16 22.625l-6.489 3.408l1.239-7.218l-5.25-5.111l7.255-1.054L16 6.083l3.245 6.567l7.255 1.054l-5.25 5.111l1.239 7.218z"></svg:path>`,
})
export class VscodeIconsFileTypeFaviconIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
