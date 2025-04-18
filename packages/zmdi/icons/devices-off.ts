import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiDevicesOffIcon],svg[zmdi-devices-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M469 96H188l-43-43h324zM41 3l42 42l372 373l-27 27l-50-50H0v-64h43V96q0-15 10-27L14 30zm44 99v229h229zm406 37q8 0 14.5 6t6.5 15v213q0 9-6.5 15.5T491 395h-4l-64-64h46V181h-85v111l-43-43v-89q0-9 6.5-15t15.5-6z"></svg:path>`,
})
export class ZmdiDevicesOffIcon {
  readonly viewBox = input("0 0 512 448")
  readonly width = input("1.15em")
  readonly height = input("1em")
}
