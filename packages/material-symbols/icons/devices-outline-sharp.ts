import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDevicesOutlineSharpIcon],svg[material-symbols-devices-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20v-3h2V4h17v2H6v11h6v3zm12 0V8h8v12zm2-3h4v-7h-4zm0 0h4z"></svg:path>`,
})
export class MaterialSymbolsDevicesOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
