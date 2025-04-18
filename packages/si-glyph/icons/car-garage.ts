import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphCarGarageIcon],svg[si-glyph-car-garage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M.043 2.083v11.855h1.939V3.943h12.036v9.995h1.94V2.083z"></svg:path><svg:path d="M3 5h9.956v.952H3zm0 2h9.957v.971H3zm8.97 5.96v.515c0 .271-.438.492-.975.492s-.974-.221-.974-.492h.001v-.485H5.946v.498c0 .247-.434.449-.964.449s-.961-.202-.961-.449v-.509h.139c-1.287-.117-1.156-1.13-1.156-1.13c0-.73.152-1.901.996-2.402V8h1v1.192l.059-.008S7.096 9.001 8 9.001s2.79.214 2.901.23l.098.018V8h1v1.457c.756.331 1 1.354 1 2.392c0 0-.027.93-1.03 1.111zm-7.001-.991h-1v-1h1zm3.99-.011h-2v-1h2zm3.01.011h-1v-1h1z"></svg:path></svg:g>`,
})
export class SiGlyphCarGarageIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
