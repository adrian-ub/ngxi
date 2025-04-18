import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMarkEmailUnreadOutlineIcon],svg[material-symbols-light-mark-email-unread-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h9.947q-.043.25-.053.49q-.009.24.014.51H4.308L12 11l3.573-2.333q.177.171.359.332t.382.297L12 12.116L4 6.885v10.5q0 .269.173.442t.443.173h14.769q.269 0 .442-.173t.173-.443V10.15q.287-.067.527-.158q.24-.09.473-.223v7.616q0 .69-.462 1.152T19.385 19zM4 6v12zm15 2.27q-1.038 0-1.77-.731t-.73-1.77T17.23 4T19 3.27t1.77.73t.73 1.77t-.73 1.769t-1.77.73"></svg:path>`,
})
export class MaterialSymbolsLightMarkEmailUnreadOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
