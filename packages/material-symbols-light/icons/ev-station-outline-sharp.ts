import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEvStationOutlineSharpIcon],svg[material-symbols-light-ev-station-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 10.5h6V5H6zM6 19h6v-7.5H6zm-1 1V4h8v7.616h2.539v7.5h2.865V8.885H17.25V6.5h.404V5.385h.769V6.5h.846V5.385h.77V6.5h.403v2.385h-1.154V20h-4.634v-7.5H13V20zm7-1H6zm-3.346-.885l1.769-3.23H9.366v-2.52l-1.789 3.231h1.077z"></svg:path>`,
})
export class MaterialSymbolsLightEvStationOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
