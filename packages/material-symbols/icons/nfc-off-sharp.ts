import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsNfcOffSharpIcon],svg[material-symbols-nfc-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V5.825L.675 3.5L2.1 2.075l19.8 19.8l-1.425 1.425l-2.3-2.3zm4-4h7.175l-2-2H9v-3.175l-2-2zm14 1.15l-4-4V7h-5.875v1.275L5.85 3H21zm-6-6l-2-2V9h2z"></svg:path>`,
})
export class MaterialSymbolsNfcOffSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
