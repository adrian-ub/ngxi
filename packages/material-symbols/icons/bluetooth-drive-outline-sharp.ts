import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBluetoothDriveOutlineSharpIcon],svg[material-symbols-bluetooth-drive-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 16q.625 0 1.063-.437T8 14.5t-.437-1.062T6.5 13t-1.062.438T5 14.5t.438 1.063T6.5 16m9 0q.625 0 1.063-.437T17 14.5t-.437-1.062T15.5 13t-1.062.438T14 14.5t.438 1.063T15.5 16M2 21v-9l2.45-7H15v2H5.85L4.8 10H15v2H4v5h14v-5h2v9h-3v-2H5v2zm16.65-10V7.2l-2.3 2.3l-.7-.7l2.8-2.8l-2.8-2.8l.7-.7l2.3 2.3V1h.5L22 3.9L19.85 6L22 8.15L19.15 11zm1-6.2l.95-.9l-.95-.95zm0 4.3l.95-.95l-.95-.95zM4 12v5z"></svg:path>`,
})
export class MaterialSymbolsBluetoothDriveOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
