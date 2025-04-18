import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faFileImageOIcon],svg[fa-file-image-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1468 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28H96q-40 0-68-28t-28-68V96q0-40 28-68T96 0h896q40 0 88 20t76 48zm-444-244v376h376q-10-29-22-41l-313-313q-12-12-41-22m384 1528V640H992q-40 0-68-28t-28-68V128H128v1536zm-128-448v320H256v-192l192-192l128 128l384-384zm-832-192q-80 0-136-56t-56-136t56-136t136-56t136 56t56 136t-56 136t-136 56"></svg:path>`,
})
export class FaFileImageOIcon {
  readonly viewBox = input("0 0 1536 1792")
  readonly width = input("0.86em")
  readonly height = input("1em")
}
