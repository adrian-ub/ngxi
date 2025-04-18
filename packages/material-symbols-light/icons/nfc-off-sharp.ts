import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNfcOffSharpIcon],svg[material-symbols-light-nfc-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V5.421L1.887 3.308l.713-.714l19.223 19.223l-.713.714L18.579 20zm4-4h6.579l-1-1H9v-4.579l-1-1zm12 1.208l-4-4V8h-4.471v.737L6.792 4H20zm-5-5l-2.5-2.5V9H15z"></svg:path>`,
})
export class MaterialSymbolsLightNfcOffSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
