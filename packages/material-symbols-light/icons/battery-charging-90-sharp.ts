import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBatteryCharging90SharpIcon],svg[material-symbols-light-battery-charging-90-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.885 21V4.48h2.423V3h3.384v1.48h2.424v7.712q-2.135.275-3.587 1.898t-1.452 3.852q0 .843.227 1.618t.663 1.44zm1-13.154h6.23V5.461h-6.23zm7.692 13.635v-2.635h-1.539l2.385-4.327v2.635h1.539z"></svg:path>`,
})
export class MaterialSymbolsLightBatteryCharging90SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
