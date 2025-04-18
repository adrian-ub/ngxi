import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightOpenInBrowserSharpIcon],svg[material-symbols-light-open-in-browser-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V4h16v16h-4.73v-1H19V7H5v12h3.73v1zm7.5 0v-6.304l-2.1 2.1l-.708-.719L12 11.769l3.308 3.308l-.708.72l-2.1-2.1V20z"></svg:path>`,
})
export class MaterialSymbolsLightOpenInBrowserSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
