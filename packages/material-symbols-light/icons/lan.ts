import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLanIcon],svg[material-symbols-light-lan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 21.5v-6h3v-4h5v-3h-3v-6h7v6h-3v3h5v4h3v6h-7v-6h3v-3h-9v3h3v6z"></svg:path>`,
})
export class MaterialSymbolsLightLanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
