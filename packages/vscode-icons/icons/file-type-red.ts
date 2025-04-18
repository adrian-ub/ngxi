import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeRedIcon],svg[vscode-icons-file-type-red-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="vscodeIconsFileTypeRed0" x1="-547.975" x2="-547" y1="-244.974" y2="-244.974" gradientTransform="matrix(4 0 0 -4 2204 -974)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#eea831"></svg:stop><svg:stop offset="1" stop-color="#ffc929"></svg:stop></svg:lineargradient><svg:lineargradient id="vscodeIconsFileTypeRed1" x1="-547" x2="-544.762" y1="-247.171" y2="-247.171" gradientTransform="matrix(4 0 0 -4 2204 -974)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#b32629"></svg:stop><svg:stop offset=".583" stop-color="#8c1e21"></svg:stop><svg:stop offset="1" stop-color="#7a1a1d"></svg:stop></svg:lineargradient><svg:lineargradient id="vscodeIconsFileTypeRed2" x1="-547" x2="-546.025" y1="-244.974" y2="-244.974" gradientTransform="matrix(4 0 0 -4 2204 -974)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#e8a333"></svg:stop><svg:stop offset=".612" stop-color="#c68931"></svg:stop><svg:stop offset="1" stop-color="#ab762f"></svg:stop></svg:lineargradient><svg:lineargradient id="vscodeIconsFileTypeRed3" x2="-543.5" y1="-249.368" y2="-249.368" href="#vscodeIconsFileTypeRed1"></svg:lineargradient><svg:lineargradient id="vscodeIconsFileTypeRed4" x1="-550.5" x2="-547" y1="-249.368" y2="-249.368" gradientTransform="matrix(4 0 0 -4 2204 -974)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#ae2524"></svg:stop><svg:stop offset=".563" stop-color="#d01d19"></svg:stop><svg:stop offset="1" stop-color="#ed1913"></svg:stop></svg:lineargradient><svg:lineargradient id="vscodeIconsFileTypeRed5" x1="-549.238" y1="-247.171" y2="-247.171" href="#vscodeIconsFileTypeRed4"></svg:lineargradient></svg:defs><svg:path fill="url(#vscodeIconsFileTypeRed0)" d="M16 9.792V2l-3.903 5.77z"></svg:path><svg:path fill="url(#vscodeIconsFileTypeRed1)" d="M16 12.097v7.806l8.952-4.667l-3.904-5.769z"></svg:path><svg:path fill="url(#vscodeIconsFileTypeRed2)" d="m16 9.792l3.903-2.022L16 2z"></svg:path><svg:path fill="url(#vscodeIconsFileTypeRed3)" d="M26.097 16.947L16 22.208V30l14-7.283z"></svg:path><svg:path fill="url(#vscodeIconsFileTypeRed4)" d="M2 22.717L16 30v-7.792L5.903 16.947z"></svg:path><svg:path fill="url(#vscodeIconsFileTypeRed5)" d="m10.952 9.467l-3.904 5.769L16 19.903v-7.806z"></svg:path>`,
})
export class VscodeIconsFileTypeRedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
