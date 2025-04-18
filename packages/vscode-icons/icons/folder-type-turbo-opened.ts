import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFolderTypeTurboOpenedIcon],svg[vscode-icons-folder-type-turbo-opened-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="vscodeIconsFolderTypeTurboOpened0" x1="-207.66" x2="-216.52" y1="160.23" y2="151.37" gradientTransform="matrix(1 0 0 -1 234 178)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#0096ff"></svg:stop><svg:stop offset="1" stop-color="#ff1e56"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="#666" d="M27.4 5.5h-9.2l-2.1 4.2H4.3v4H.5l3.8 12.8h25.2v-21Zm-7.2 2.1h7.1v2.1h-8.1Zm5.5 6.1H6.6v-1.9h20.8v7.63Z"></svg:path><svg:path fill="#f5f5f5" d="M21 15.15A5.85 5.85 0 1 0 26.84 21A5.86 5.86 0 0 0 21 15.15M21 24a3 3 0 1 1 3-3a3 3 0 0 1-3 3"></svg:path><svg:path fill="url(#vscodeIconsFolderTypeTurboOpened0)" fill-rule="evenodd" d="M21.48 14.19V12a9 9 0 0 1 0 18v-2.19a6.83 6.83 0 0 0 0-13.62m-5.65 11.28a6.9 6.9 0 0 1-1.65-4H12A8.93 8.93 0 0 0 14.29 27l1.54-1.54ZM20.5 30v-2.19a6.8 6.8 0 0 1-4-1.65L15 27.7a8.93 8.93 0 0 0 5.5 2.3"></svg:path>`,
})
export class VscodeIconsFolderTypeTurboOpenedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
