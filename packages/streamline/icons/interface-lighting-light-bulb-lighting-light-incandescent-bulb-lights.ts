import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceLightingLightBulbLightingLightIncandescentBulbLightsIcon],svg[streamline-interface-lighting-light-bulb-lighting-light-incandescent-bulb-lights-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5 5A4.5 4.5 0 1 0 5 9v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V9a4.48 4.48 0 0 0 2.5-4ZM5 13.5h4"></svg:path>`,
})
export class StreamlineInterfaceLightingLightBulbLightingLightIncandescentBulbLightsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
