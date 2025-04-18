import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[unjsUnstorageIcon],svg[unjs-unstorage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#unjsUnstorage0)"><svg:path fill="#616161" d="M31.043 6.988V28.86a2.183 2.183 0 0 1-2.183 2.183H3.14A2.183 2.183 0 0 1 .957 28.86V3.14c0-1.205.978-2.182 2.183-2.182h22.41c.89 0 1.735.397 2.302 1.085l2.51 3.047c.44.535.68 1.205.68 1.898"></svg:path><svg:path fill="#fff" d="M25.985 31.043H6v-13.23a.82.82 0 0 1 .82-.82h18.348a.82.82 0 0 1 .82.82v13.23z"></svg:path><svg:path fill="#039BE5" d="M6 27.98h19.985v3.063H6z"></svg:path><svg:path fill="#424242" d="M4.188.958v11.937c0 .445.392.793.912.793h19.163c.52 0 .922-.346.922-.793V.958z"></svg:path><svg:path fill="#E0E0E0" d="M8.75.958v11.255c0 .42.295.745.685.745H23.8c.39 0 .692-.325.692-.745V.957zM21.493 11.63c0 .18-.148.327-.328.327H16.82a.33.33 0 0 1-.328-.327V2.285c0-.18.148-.327.328-.327h4.345c.18 0 .328.147.328.327z"></svg:path></svg:g><svg:defs><svg:clippath id="unjsUnstorage0"><svg:path fill="#fff" d="M0 0h32v32H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class UnjsUnstorageIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
