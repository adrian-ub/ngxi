import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeLightVercelIcon],svg[vscode-icons-file-type-light-vercel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="vscodeIconsFileTypeLightVercel0" x1="1.288" x2="1.143" y1="32.55" y2="32.75" gradientTransform="matrix(114 0 0 -100 -113 3301)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#fff"></svg:stop><svg:stop offset="1"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="url(#vscodeIconsFileTypeLightVercel0)" fill-rule="evenodd" d="m16 3.719l14 24.562H2z"></svg:path>`,
})
export class VscodeIconsFileTypeLightVercelIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
