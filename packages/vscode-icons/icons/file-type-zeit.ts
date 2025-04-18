import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeZeitIcon],svg[vscode-icons-file-type-zeit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="vscodeIconsFileTypeZeit0" x1="1.459" x2="1.096" y1="32.377" y2="32.82" gradientTransform="matrix(113 0 0 -100 -112 3301)" gradientUnits="userSpaceOnUse"><svg:stop offset="0"></svg:stop><svg:stop offset="1" stop-color="#fff"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="url(#vscodeIconsFileTypeZeit0)" fill-rule="evenodd" d="m16 3.611l14 24.778H2L16 3.611z"></svg:path>`,
})
export class VscodeIconsFileTypeZeitIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
