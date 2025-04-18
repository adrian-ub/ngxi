import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLight11mpOutlineIcon],svg[material-symbols-light-11mp-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.616 11.192h.884V5.808H8.116v.884h1.5zm5 0h.884V5.808h-2.384v.884h1.5zm-8.308 7h.884v-4.5h1.616v3h.884v-3h1.616v4.5h.884V13.5q0-.31-.191-.501t-.501-.191H7q-.31 0-.501.191q-.191.192-.191.501zm7.5 0h.884v-1.5H17q.31 0 .501-.191t.191-.501v-2.5q0-.31-.191-.501q-.192-.191-.501-.191h-3.192zm.884-2.384v-2.116h2.116v2.116zM5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20zm0-1h12.769q.23 0 .423-.192t.192-.424V5.616q0-.231-.192-.424T18.384 5H5.616q-.231 0-.424.192T5 5.616v12.769q0 .23.192.423t.423.192M5 5v14z"></svg:path>`,
})
export class MaterialSymbolsLight11mpOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
