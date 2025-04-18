import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsNfcOffOutlineSharpIcon],svg[material-symbols-nfc-off-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V5.825L.675 3.5L2.1 2.075l19.8 19.8l-1.425 1.425l-2.3-2.3zm4-4V9.825l-2-2V19h11.175l-2-2zm14 1.175l-2-2V5H7.825l-2-2H21zM9 15h3.175L9 11.825zm8-.825l-2-2V9h-2v1.175L11.125 8.3V7H17zm-3.575-3.6"></svg:path>`,
})
export class MaterialSymbolsNfcOffOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
