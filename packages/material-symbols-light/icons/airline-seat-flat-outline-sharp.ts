import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAirlineSeatFlatOutlineSharpIcon],svg[material-symbols-light-airline-seat-flat-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.539 13V8h10.923v5zm1-4v3zm-7 6.77v-1h16.923v1zM5.654 13q-.904 0-1.51-.606t-.605-1.51t.605-1.509t1.51-.606t1.51.606t.605 1.51t-.605 1.51t-1.51.605m0-1q.474 0 .795-.32q.32-.321.32-.796q0-.474-.32-.794q-.321-.32-.795-.32t-.795.32t-.32.795t.32.794t.795.321m4.885 0h8.923V9h-8.923zm-4.885-1.115"></svg:path>`,
})
export class MaterialSymbolsLightAirlineSeatFlatOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
