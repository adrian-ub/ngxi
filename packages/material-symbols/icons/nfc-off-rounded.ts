import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsNfcOffRoundedIcon],svg[material-symbols-nfc-off-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5.825L1.375 4.2q-.3-.3-.3-.713t.3-.712t.713-.3t.712.3l18.4 18.4q.3.3.3.7t-.3.7t-.712.3t-.713-.3L18.175 21zM7 9.825V16q0 .425.288.713T8 17h6.175l-2-2H9v-3.175zM21 5v10.725q0 .675-.612.938T19.3 16.45l-2.3-2.3V8q0-.425-.288-.712T16 7h-3q-.65 0-1.15.35t-.725.925L7.55 4.7q-.475-.475-.212-1.088T8.275 3H19q.825 0 1.413.588T21 5m-6 4v3.15l-2-2V9z"></svg:path>`,
})
export class MaterialSymbolsNfcOffRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
