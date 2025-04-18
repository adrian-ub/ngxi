import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeLightTurboIcon],svg[vscode-icons-file-type-light-turbo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="vscodeIconsFileTypeLightTurbo0" x1="-209.59" x2="-223.36" y1="167.02" y2="153.25" gradientTransform="matrix(1 0 0 -1 234 178)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#0096ff"></svg:stop><svg:stop offset="1" stop-color="#ff1e56"></svg:stop></svg:lineargradient></svg:defs><svg:path d="M16.1 6.9a9.1 9.1 0 1 0 9.1 9.1a9.11 9.11 0 0 0-9.1-9.1m0 13.81A4.71 4.71 0 1 1 20.81 16a4.71 4.71 0 0 1-4.71 4.71"></svg:path><svg:path fill="url(#vscodeIconsFileTypeLightTurbo0)" fill-rule="evenodd" d="M16.86 5.41V2a14 14 0 0 1 0 28v-3.4a10.62 10.62 0 0 0 0-21.18ZM8.08 23a10.6 10.6 0 0 1-2.57-6.19h-3.4a13.93 13.93 0 0 0 3.56 8.59l2.4-2.4Zm7.26 7v-3.4A10.6 10.6 0 0 1 9.15 24l-2.4 2.4a13.93 13.93 0 0 0 8.59 3.6"></svg:path>`,
})
export class VscodeIconsFileTypeLightTurboIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
