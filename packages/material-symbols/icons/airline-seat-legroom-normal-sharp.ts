import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAirlineSeatLegroomNormalSharpIcon],svg[material-symbols-airline-seat-legroom-normal-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 21v-7H6V3h6v6h7v9h3v3zm-2-4H3V3h2v12h9z"></svg:path>`,
})
export class MaterialSymbolsAirlineSeatLegroomNormalSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
