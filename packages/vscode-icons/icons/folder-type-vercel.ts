import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFolderTypeVercelIcon],svg[vscode-icons-folder-type-vercel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:lineargradient id="vscodeIconsFolderTypeVercel0" x1="219.28" x2="112.62" y1="236.67" y2="90.238" gradientTransform="translate(2.439 13.9)scale(.93116)" gradientUnits="userSpaceOnUse"><svg:stop offset="0"></svg:stop><svg:stop offset="1" stop-color="#fff"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="#52525b" d="M128.3 25.879H84.707l-9.844 19.688H20.02v78.75h118.12V25.879zm0 19.688H89.863l5.156-9.844H128.3z"></svg:path><svg:path fill="url(#vscodeIconsFolderTypeVercel0)" fill-rule="evenodd" d="m103.18 66.045l39.283 69.837H63.896z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class VscodeIconsFolderTypeVercelIcon {
  readonly viewBox = input("0 0 150 150")
  readonly width = input("1em")
  readonly height = input("1em")
}
