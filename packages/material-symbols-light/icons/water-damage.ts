import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightWaterDamageIcon],svg[material-symbols-light-water-damage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 19V9.716L2.604 12.23l-.598-.787L12 4l10.02 7.439l-.604.792L18 9.696V19zm6-3.5q.633 0 1.066-.434q.434-.433.434-1.066q0-.483-.27-1.005q-.268-.522-1.23-1.918q-1 1.454-1.25 1.938q-.25.483-.25.985q0 .633.434 1.066q.433.434 1.066.434"></svg:path>`,
})
export class MaterialSymbolsLightWaterDamageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
