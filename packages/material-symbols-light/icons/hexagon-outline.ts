import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHexagonOutlineIcon],svg[material-symbols-light-hexagon-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.089 20.5L2.177 12l4.912-8.5h9.823l4.911 8.5l-4.911 8.5zm.573-1h8.677l4.313-7.5l-4.313-7.5H7.662L3.323 12zM12 12"></svg:path>`,
})
export class MaterialSymbolsLightHexagonOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
