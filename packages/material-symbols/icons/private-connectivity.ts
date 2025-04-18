import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPrivateConnectivityIcon],svg[material-symbols-private-connectivity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19q-2.65 0-4.612-1.713T5.075 13H2v-2h3.075q.35-2.575 2.313-4.288T12 5t4.613 1.713T18.925 11H22v2h-3.075q-.35 2.575-2.312 4.288T12 19m-2-3.5h4q.425 0 .713-.288T15 14.5v-3q0-.425-.288-.712T14 10.5v-.9q0-.875-.575-1.487T12 7.5q-.825 0-1.412.588T10 9.5v1q-.425 0-.712.288T9 11.5v3q0 .425.288.713T10 15.5m2-1.75q-.325 0-.537-.213T11.25 13t.213-.537t.537-.213t.538.213t.212.537t-.213.538t-.537.212m-1-3.25v-1q0-.425.288-.712T12 8.5t.713.288T13 9.5v1z"></svg:path>`,
})
export class MaterialSymbolsPrivateConnectivityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
