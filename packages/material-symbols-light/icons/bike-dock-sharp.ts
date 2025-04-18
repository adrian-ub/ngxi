import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBikeDockSharpIcon],svg[material-symbols-light-bike-dock-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v-1l4.77-.917L9.807 4h4.384l1.039 14.083L20 19v1zm6.808-1.827h2.384V5h-2.384z"></svg:path>`,
})
export class MaterialSymbolsLightBikeDockSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
