import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFloorLampOutlineSharpIcon],svg[material-symbols-light-floor-lamp-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.52 19v-8H6.015l2.178-7h7.65l2.179 7h-5.504v8zm-4.15-9h9.3l-1.55-5h-6.2zm1.15 11v-1h7v1zm3.5-13.5"></svg:path>`,
})
export class MaterialSymbolsLightFloorLampOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
