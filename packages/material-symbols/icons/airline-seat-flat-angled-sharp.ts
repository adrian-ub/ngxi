import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAirlineSeatFlatAngledSharpIcon],svg[material-symbols-airline-seat-flat-angled-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.25 17.175l-12.225-4.45l2.4-6.575L23.65 10.6zM20.225 20l-18.8-6.85l.675-1.875l18.8 6.85zm-13.9-8.45q-1.25 0-2.125-.875T3.325 8.55T4.2 6.425t2.125-.875t2.125.875t.875 2.125t-.875 2.125t-2.125.875"></svg:path>`,
})
export class MaterialSymbolsAirlineSeatFlatAngledSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
