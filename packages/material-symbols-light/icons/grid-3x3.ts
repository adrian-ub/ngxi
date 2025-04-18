import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightGrid3x3Icon],svg[material-symbols-light-grid-3x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 19v-4H5v-1h4v-4H5V9h4V5h1v4h4V5h1v4h4v1h-4v4h4v1h-4v4h-1v-4h-4v4zm1-5h4v-4h-4z"></svg:path>`,
})
export class MaterialSymbolsLightGrid3x3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
