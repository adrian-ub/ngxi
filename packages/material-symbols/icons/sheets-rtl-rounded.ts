import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSheetsRtlRoundedIcon],svg[material-symbols-sheets-rtl-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.3 21.3l-2.6-2.6q-.3-.3-.3-.7t.3-.7l2.6-2.6q.3-.3.7-.3t.7.3t.288.713t-.288.712L6.825 17H19q.425 0 .713.288T20 18t-.288.713T19 19H6.825l.875.875q.275.3.287.713T7.7 21.3t-.7.3t-.7-.3M5.5 13q-.625 0-1.062-.437T4 11.5v-9q0-.625.438-1.062T5.5 1h13q.625 0 1.063.438T20 2.5v9q0 .625-.437 1.063T18.5 13zM6 6h5V3H6zm7 0h5V3h-5zm-2 5V8H6v3zm2 0h5V8h-5z"></svg:path>`,
})
export class MaterialSymbolsSheetsRtlRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
