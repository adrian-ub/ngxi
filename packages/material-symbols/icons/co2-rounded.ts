import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCo2RoundedIcon],svg[material-symbols-co2-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 15q-.425 0-.712-.288T10 14v-4q0-.425.288-.712T11 9h3q.425 0 .713.288T15 10v4q0 .425-.288.713T14 15zm.5-1.5h2v-3h-2zm5.5 3.75V15.5q0-.425.288-.712T18 14.5h2v-1h-2.275q-.3 0-.513-.213T17 12.75q0-.3.213-.525T17.75 12h2.75q.425 0 .713.288T21.5 13v1.5q0 .425-.288.713t-.712.287h-2v1h2.25q.3 0 .525.225t.225.525q0 .325-.225.538T20.75 18h-3q-.325 0-.537-.213T17 17.25M4 15q-.425 0-.712-.288T3 14v-4q0-.425.288-.712T4 9h3q.425 0 .713.288T8 10v.525q0 .3-.225.513t-.525.212q-.325 0-.537-.213T6.5 10.5h-2v3h2q0-.3.213-.525t.537-.225q.3 0 .525.225T8 13.5v.5q0 .425-.288.713T7 15z"></svg:path>`,
})
export class MaterialSymbolsCo2RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
