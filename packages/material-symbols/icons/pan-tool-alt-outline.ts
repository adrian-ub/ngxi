import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPanToolAltOutlineIcon],svg[material-symbols-pan-tool-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.95 21q-.675 0-1.287-.288T7.625 19.9L1.15 11.925l.65-.625q.475-.475 1.125-.55t1.175.3L7 13.075V3q0-.425.288-.712T8 2t.713.288T9 3v13.925l-2.775-1.95l2.95 3.65q.15.175.35.275t.425.1H17q.825 0 1.413-.587T19 17v-7q0-.425.288-.712T20 9t.713.288T21 10v7q0 1.65-1.175 2.825T17 21zM11 13V7q0-.425.288-.712T12 6t.713.288T13 7v6zm4 0V8q0-.425.288-.712T16 7t.713.288T17 8v5z"></svg:path>`,
})
export class MaterialSymbolsPanToolAltOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
