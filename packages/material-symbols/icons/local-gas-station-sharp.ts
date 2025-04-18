import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLocalGasStationSharpIcon],svg[material-symbols-local-gas-station-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21V3h10v9h3v7.5h2v-8.2q-.225.125-.475.163T18 11.5q-1.05 0-1.775-.725T15.5 9q0-.8.438-1.437T17.1 6.65L15 4.55l1.05-1.05l3.7 3.6q.375.375.563.875T20.5 9v12h-5v-7.5H14V21zm2-11h6V5H6zm12 0q.425 0 .713-.288T19 9t-.288-.712T18 8t-.712.288T17 9t.288.713T18 10"></svg:path>`,
})
export class MaterialSymbolsLocalGasStationSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
