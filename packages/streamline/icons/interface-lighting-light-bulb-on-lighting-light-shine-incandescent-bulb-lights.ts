import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceLightingLightBulbOnLightingLightShineIncandescentBulbLightsIcon],svg[streamline-interface-lighting-light-bulb-on-lighting-light-shine-incandescent-bulb-lights-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 8a3.5 3.5 0 1 0-5.06 3.12v1.72a.39.39 0 0 0 .39.38h2.34a.39.39 0 0 0 .39-.38v-1.75A3.5 3.5 0 0 0 10.5 8ZM7 .81v1.5m4-.07L9.94 3.31m3.34 2.03h-1.5M3 2.24l1.06 1.07M.72 5.34h1.5"></svg:path>`,
})
export class StreamlineInterfaceLightingLightBulbOnLightingLightShineIncandescentBulbLightsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
