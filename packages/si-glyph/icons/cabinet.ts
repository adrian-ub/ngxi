import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphCabinetIcon],svg[si-glyph-cabinet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="M4 15.021h10V8.959H4zm1.042-4.98h7.938v3.917H5.042z"></svg:path><svg:path fill="currentColor" d="M13.721.039H4.239c-.691 0-1.238.478-1.238 1.178v13.605c0 .614.531 1.178 1.238 1.178h9.482c.842 0 1.238-.548 1.238-1.178V1.217c0-.7-.568-1.178-1.238-1.178M14 15.021H4V8.959h10zm0-8H4V.959h10z"></svg:path><svg:path fill="currentColor" d="M10.042 10.041v.999H7.938v-.999H5.042v3.917h7.937v-3.917zm0-7.041H7.958v-.958H5V6h8V2.042h-2.958z"></svg:path></svg:g>`,
})
export class SiGlyphCabinetIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
