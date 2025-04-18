import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightIflIcon],svg[material-symbols-light-ifl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.849 17.154q.545 0 .925-.382t.38-.928t-.382-.926t-.928-.38t-.926.382t-.38.928t.383.926t.928.38m-3.847-3.846q.546 0 .926-.383q.38-.382.38-.927t-.382-.926t-.928-.38t-.926.382t-.38.928t.382.926t.928.38M8.156 9.46q.546 0 .926-.382t.38-.928q0-.545-.382-.925t-.928-.38t-.926.382t-.38.928t.382.926t.928.38M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20z"></svg:path>`,
})
export class MaterialSymbolsLightIflIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
