import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightImageNotSupportedOutlineSharpIcon],svg[material-symbols-light-image-not-supported-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.11 21.53L18.579 20H4V5.421L2.47 3.885l.707-.708l17.646 17.646l-.713.708ZM5 19h12.579l-2.5-2.5H7l2.5-3.308l1.885 2.283l1.138-1.53L5 6.42V19Zm15-1.825l-1-1V5H7.825l-1-1H20v13.175Zm-6.525-6.525Zm-2.163 2.083Z"></svg:path>`,
})
export class MaterialSymbolsLightImageNotSupportedOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
