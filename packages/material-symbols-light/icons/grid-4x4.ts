import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightGrid4x4Icon],svg[material-symbols-light-grid-4x4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 20.5v-3h-3v-1h3v-4h-3v-1h3v-4h-3v-1h3v-3h1v3h4v-3h1v3h4v-3h1v3h3v1h-3v4h3v1h-3v4h3v1h-3v3h-1v-3h-4v3h-1v-3h-4v3zm1-4h4v-4h-4zm5 0h4v-4h-4zm-5-5h4v-4h-4zm5 0h4v-4h-4z"></svg:path>`,
})
export class MaterialSymbolsLightGrid4x4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
