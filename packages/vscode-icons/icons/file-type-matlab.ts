import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeMatlabIcon],svg[vscode-icons-file-type-matlab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="vscodeIconsFileTypeMatlab0" x1="16.803" x2="15.013" y1="16.631" y2="22.411" gradientTransform="matrix(1 0 0 -1 0 32)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#512"></svg:stop><svg:stop offset=".23" stop-color="#523"></svg:stop><svg:stop offset=".36" stop-color="#534"></svg:stop><svg:stop offset=".51" stop-color="#645"></svg:stop><svg:stop offset=".66" stop-color="#568"></svg:stop><svg:stop offset=".84" stop-color="#29d"></svg:stop></svg:lineargradient><svg:lineargradient id="vscodeIconsFileTypeMatlab1" x1="29.71" x2="11.71" y1="18.983" y2="14.563" gradientUnits="userSpaceOnUse"><svg:stop offset=".081" stop-color="#c33"></svg:stop><svg:stop offset=".189" stop-color="#de5239"></svg:stop><svg:stop offset=".313" stop-color="#f06e3e"></svg:stop><svg:stop offset=".421" stop-color="#fa8042"></svg:stop><svg:stop offset=".5" stop-color="#fe8643"></svg:stop><svg:stop offset=".58" stop-color="#fa7f42"></svg:stop><svg:stop offset=".696" stop-color="#ef6c3e"></svg:stop><svg:stop offset=".833" stop-color="#dc4c37"></svg:stop><svg:stop offset=".916" stop-color="#cf3633"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="#49d" d="m2 17.55l7.97-3.22a20.7 20.7 0 0 1 2.72-2.95c.66-.35 1.9-.16 4.17-2.98c2.2-2.75 2.9-5.1 3.93-5.1c1.63 0 2.83 3.52 4.65 8.85A116 116 0 0 0 30 24.12c-1.9-1.77-3.52-3.68-5.37-3.63c-1.72.04-3.63 2.08-5.72 4.7c-1.66 2.1-3.86 3.54-4.72 3.51c0 0-2.22-6.28-4.08-7.3a2.64 2.64 0 0 0-2.39.2L2 17.54Z"></svg:path><svg:path fill="url(#vscodeIconsFileTypeMatlab0)" d="M19.8 4.02c-.67.9-1.48 2.55-2.94 4.38c-2.27 2.82-3.5 2.63-4.17 2.98a19.7 19.7 0 0 0-2.72 2.95l3.3 2.41c2.8-3.82 4.3-7.96 5.47-10.64a13.6 13.6 0 0 1 1.06-2.08"></svg:path><svg:path fill="url(#vscodeIconsFileTypeMatlab1)" d="M20.8 3.3c-2.18 0-3.67 11.48-11.72 17.89c2.26-.37 4.22 5.24 5.12 7.51c4-.68 7.2-8.33 10.43-8.21c1.85.07 3.47 1.86 5.37 3.63C25.66 15 23.63 3.3 20.8 3.3"></svg:path>`,
})
export class VscodeIconsFileTypeMatlabIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
