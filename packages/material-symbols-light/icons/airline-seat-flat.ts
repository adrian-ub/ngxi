import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAirlineSeatFlatIcon],svg[material-symbols-light-airline-seat-flat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.539 13V8h7.923q1.237 0 2.118.881T20.462 11v2zm-6 2.77v-1h16.923v1zM5.654 13q-.904 0-1.51-.606t-.605-1.51t.605-1.509t1.51-.606t1.51.606t.605 1.51t-.605 1.51t-1.51.605"></svg:path>`,
})
export class MaterialSymbolsLightAirlineSeatFlatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
