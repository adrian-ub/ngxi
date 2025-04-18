import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDevicesOutlineSharpIcon],svg[material-symbols-light-devices-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19v-1.5h2V5h15v1H6v11.5h5.48V19zm11.25 0V8.385h6.77V19zm1-1.5h4.77V9.385h-4.77zm0 0h4.77z"></svg:path>`,
})
export class MaterialSymbolsLightDevicesOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
