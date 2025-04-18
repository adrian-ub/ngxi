import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEscalatorIcon],svg[material-symbols-light-escalator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 17.116h2.839l5-9H17q.26 0 .438-.178t.178-.438t-.178-.437T17 6.885h-2.838l-5 9H7q-.26 0-.437.178t-.178.437t.178.438t.437.178M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20z"></svg:path>`,
})
export class MaterialSymbolsLightEscalatorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
