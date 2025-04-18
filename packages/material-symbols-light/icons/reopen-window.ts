import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightReopenWindowIcon],svg[material-symbols-light-reopen-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v5h-1V8H4v9.385q0 .23.192.423t.423.192h6.539v1zm13.615 3.385q-1.595 0-2.832-.965T13.735 19h.934q.402 1.12 1.353 1.81t2.209.69q1.584 0 2.696-1.112t1.112-2.696t-1.112-2.696t-2.696-1.111q-.918 0-1.754.445t-1.446 1.17h1.892v.885h-3.384V13h.884v1.848q.713-.823 1.71-1.336Q17.129 13 18.23 13q1.94 0 3.316 1.376t1.376 3.316t-1.376 3.317t-3.316 1.376"></svg:path>`,
})
export class MaterialSymbolsLightReopenWindowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
