import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLight8mpRoundedIcon],svg[material-symbols-light-8mp-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.885 11.192h2.346q.327 0 .548-.22q.221-.222.221-.549V6.577q0-.327-.221-.548t-.548-.221h-2.346q-.327 0-.548.22q-.221.222-.221.549v3.846q0 .327.22.548q.222.221.549.221M11 8.116V6.577h2.116v1.539zm0 2.307V8.885h2.116v1.538zM5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20zm1.576-6.308h1.616v2.558q0 .192.125.317t.316.125t.317-.125t.126-.317v-2.558h1.616v4.058q0 .192.125.317t.316.125t.317-.125t.126-.317V13.5q0-.31-.191-.501t-.501-.191H7q-.31 0-.501.191q-.191.192-.191.501v4.25q0 .192.125.317t.316.125t.317-.125t.126-.317zm7.5 3H17q.31 0 .501-.191t.191-.501v-2.5q0-.31-.191-.501q-.192-.191-.501-.191h-2.75q-.192 0-.317.125t-.125.317v4.5q0 .192.125.317t.316.125t.317-.125t.126-.317zm0-.884v-2.116h2.116v2.116z"></svg:path>`,
})
export class MaterialSymbolsLight8mpRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
