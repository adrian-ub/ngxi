import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLanOutlineIcon],svg[material-symbols-light-lan-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 21.5v-6h3v-4h5v-3h-3v-6h7v6h-3v3h5v4h3v6h-7v-6h3v-3h-9v3h3v6zm6-14h5v-4h-5zm-5 13h5v-4h-5zm10 0h5v-4h-5zm0-4"></svg:path>`,
})
export class MaterialSymbolsLightLanOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
