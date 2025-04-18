import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNestWifiPointIcon],svg[material-symbols-light-nest-wifi-point-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.73 20q-1.97 0-3.35-1.38T4 15.27V8.73q0-1.97 1.38-3.35T8.73 4h6.54q1.97 0 3.35 1.38T20 8.73v6.54q0 1.97-1.38 3.35T15.27 20zm.347-1q0-.367.243-.607t.603-.24t.603.244t.243.603h2.462q0-.367.243-.607t.603-.24t.603.244t.243.603q1.356 0 2.14-.434q.785-.435 1.31-1.258H17q0 .36-.243.602t-.603.244t-.603-.244t-.243-.602h-2.462q0 .367-.243.606q-.244.24-.603.24t-.603-.244t-.243-.602H8.692q0 .367-.243.606q-.243.24-.603.24t-.603-.244T7 17.309H5.627q.525.823 1.31 1.257q.784.435 2.14.435"></svg:path>`,
})
export class MaterialSymbolsLightNestWifiPointIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
