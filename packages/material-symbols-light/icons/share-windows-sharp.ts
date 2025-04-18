import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightShareWindowsSharpIcon],svg[material-symbols-light-share-windows-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 14.5v-7h10.573l-3.075-3.075l.714-.713L20 8l-4.288 4.308l-.714-.708l3.075-3.1H8.5v6zM4 20V4.616h1V19h12v-4.5h1V20z"></svg:path>`,
})
export class MaterialSymbolsLightShareWindowsSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
