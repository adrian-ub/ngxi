import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeAngularIcon],svg[vscode-icons-file-type-angular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="vscodeIconsFileTypeAngular0" x1="49.009" x2="225.83" y1="213.75" y2="129.72" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#E40035"></svg:stop><svg:stop offset=".24" stop-color="#F60A48"></svg:stop><svg:stop offset=".352" stop-color="#F20755"></svg:stop><svg:stop offset=".494" stop-color="#DC087D"></svg:stop><svg:stop offset=".745" stop-color="#9717E7"></svg:stop><svg:stop offset="1" stop-color="#6C00F5"></svg:stop></svg:lineargradient><svg:lineargradient id="vscodeIconsFileTypeAngular1" x1="41.025" x2="156.74" y1="28.344" y2="160.34" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#FF31D9"></svg:stop><svg:stop offset="1" stop-color="#FF5BE1" stop-opacity="0"></svg:stop></svg:lineargradient><svg:clippath id="vscodeIconsFileTypeAngular2"><svg:path fill="#fff" d="M0 0h223v236H0z"></svg:path></svg:clippath></svg:defs><svg:g clip-path="url(#vscodeIconsFileTypeAngular2)" transform="translate(2.76 1.986)scale(.11923)"><svg:path fill="url(#vscodeIconsFileTypeAngular0)" d="m222.08 39.192l-8.019 125.92L137.39-.008zm-53.105 162.82l-57.933 33.056l-57.934-33.056l11.783-28.556h92.301zm-57.933-139.34l30.357 73.803H80.684zm-103.1 102.44L.005 39.192L84.695 0z"></svg:path><svg:path fill="url(#vscodeIconsFileTypeAngular1)" d="m222.08 39.192l-8.019 125.92L137.39-.008zm-53.105 162.82l-57.933 33.056l-57.934-33.056l11.783-28.556h92.301zm-57.933-139.34l30.357 73.803H80.684zm-103.1 102.44L.005 39.192L84.695 0z"></svg:path></svg:g>`,
})
export class VscodeIconsFileTypeAngularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
