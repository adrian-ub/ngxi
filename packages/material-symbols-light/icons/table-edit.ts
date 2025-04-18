import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTableEditIcon],svg[material-symbols-light-table-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 13.885V8.769h7.5v5.116zm0-6.116V5.616q0-.667.475-1.141T5.615 4h12.77q.666 0 1.14.475T20 5.615V7.77zM5.616 20q-.667 0-1.141-.475T4 18.386v-3.5h7.5V20zm6.884-6.115V8.769H20v2.935q-.72-.214-1.477-.039q-.758.176-1.327.745l-1.494 1.474zM13.23 21v-2.21l5.334-5.307q.148-.13.305-.19t.315-.062q.172 0 .338.064q.166.065.301.194l.925.944q.123.148.188.308q.064.159.064.319t-.052.322t-.2.31L15.44 21zm5.96-4.985l.925-.956l-.924-.943l-.95.95z"></svg:path>`,
})
export class MaterialSymbolsLightTableEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
