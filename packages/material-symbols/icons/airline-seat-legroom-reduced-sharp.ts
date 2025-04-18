import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAirlineSeatLegroomReducedSharpIcon],svg[material-symbols-airline-seat-legroom-reduced-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 21v-3l1-4H6V3h6v6h6.25l.95 1.275L17 18h3v3zm-2-4H3V3h2v12h7z"></svg:path>`,
})
export class MaterialSymbolsAirlineSeatLegroomReducedSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
