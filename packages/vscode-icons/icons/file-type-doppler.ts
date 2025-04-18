import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeDopplerIcon],svg[vscode-icons-file-type-doppler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="vscodeIconsFileTypeDoppler0" x1="24.11" x2="4.48" y1="808.88" y2="835.23" gradientTransform="translate(0 -807.89)" gradientUnits="userSpaceOnUse"><svg:stop offset=".04" stop-color="#409ff8"></svg:stop><svg:stop offset=".5" stop-color="#1673ff"></svg:stop><svg:stop offset="1" stop-color="#516ff7"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="url(#vscodeIconsFileTypeDoppler0)" fill-rule="evenodd" d="M2.59 2a.27.27 0 0 0-.23.43l5 7.8a2.25 2.25 0 0 0 1.88 1H16c2.47 0 4 2.18 4 4.62s-1.65 4.61-4 4.61H8.78a.75.75 0 0 0-.74.75H8v7.8a.75.75 0 0 0 .75.74H18c7.94 0 11.91-7.54 11.91-13.9S26 2 18 2Zm3.28 18.56h-1.8a2.17 2.17 0 0 0-2 2.32v6.74a.2.2 0 0 0 .18.21h1.8a2.19 2.19 0 0 0 2-2.32v-6.74a.2.2 0 0 0-.19-.21Z"></svg:path>`,
})
export class VscodeIconsFileTypeDopplerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
