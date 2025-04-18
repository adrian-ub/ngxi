import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightIflSharpIcon],svg[material-symbols-light-ifl-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.849 17.154q.545 0 .925-.382t.38-.928t-.382-.926t-.928-.38t-.926.382t-.38.928t.383.926t.928.38m-3.847-3.846q.546 0 .926-.383q.38-.382.38-.927t-.382-.926t-.928-.38t-.926.382t-.38.928t.382.926t.928.38M8.156 9.46q.546 0 .926-.382t.38-.928q0-.545-.382-.925t-.928-.38t-.926.382t-.38.928t.382.926t.928.38M4 20V4h16v16z"></svg:path>`,
})
export class MaterialSymbolsLightIflSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
