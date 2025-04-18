import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightListAltRoundedIcon],svg[material-symbols-light-list-alt-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.117 16.539q.327 0 .548-.222q.22-.221.22-.549t-.222-.548t-.549-.22t-.548.222t-.22.549t.222.547t.549.22m0-3.769q.327 0 .548-.221q.22-.222.22-.55t-.222-.547t-.549-.22t-.548.221t-.22.55t.222.547t.549.22m0-3.769q.327 0 .548-.221q.22-.222.22-.55t-.222-.547t-.549-.22t-.548.221q-.22.222-.22.549t.222.548t.549.22m3.575 7.27h4.385q.213 0 .356-.145t.144-.356t-.144-.356t-.356-.144h-4.385q-.212 0-.356.144t-.144.357t.144.356t.356.143m0-3.769h4.385q.213 0 .356-.144t.144-.357t-.144-.356t-.356-.143h-4.385q-.212 0-.356.144t-.144.357t.144.356t.356.143m0-3.77h4.385q.213 0 .356-.143q.144-.144.144-.357t-.144-.356t-.356-.143h-4.385q-.212 0-.356.144t-.144.357t.144.356t.356.143M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20z"></svg:path>`,
})
export class MaterialSymbolsLightListAltRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
