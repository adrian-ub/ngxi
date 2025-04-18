import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBluetoothIcon],svg[material-symbols-light-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 21.308v-8.1l-5.1 5.1l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.1 5.1v-8.1h.5L17.008 7.7l-4.3 4.3l4.3 4.3L12 21.308zm1-10.516L15.592 7.7L12.5 4.62zm0 8.589l3.092-3.081l-3.092-3.092z"></svg:path>`,
})
export class MaterialSymbolsLightBluetoothIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
