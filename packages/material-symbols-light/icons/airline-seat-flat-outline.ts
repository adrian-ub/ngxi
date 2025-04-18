import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAirlineSeatFlatOutlineIcon],svg[material-symbols-light-airline-seat-flat-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.539 13V8h7.923q1.237 0 2.118.881T20.462 11v2zm1-4v3zm-7 6.77v-1h16.923v1zM5.654 13q-.904 0-1.51-.606t-.605-1.51t.605-1.509t1.51-.606t1.51.606t.605 1.51t-.605 1.51t-1.51.605m0-1q.474 0 .795-.32q.32-.321.32-.796q0-.474-.32-.794q-.321-.32-.795-.32t-.795.32t-.32.795t.32.794t.795.321m4.885 0h8.923v-1q0-.825-.588-1.412T17.462 9h-6.923zm-4.885-1.115"></svg:path>`,
})
export class MaterialSymbolsLightAirlineSeatFlatOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
