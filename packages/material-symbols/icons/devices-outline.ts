import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDevicesOutlineIcon],svg[material-symbols-devices-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20v-3h2V6q0-.825.588-1.412T6 4h15v2H6v11h6v3zm13 0q-.425 0-.712-.288T14 19V9q0-.425.288-.712T15 8h6q.425 0 .713.288T22 9v10q0 .425-.288.713T21 20zm1-3h4v-7h-4zm0 0h4z"></svg:path>`,
})
export class MaterialSymbolsDevicesOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
