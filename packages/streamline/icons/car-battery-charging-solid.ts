import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCarBatteryChargingSolidIcon],svg[streamline-car-battery-charging-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 2a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v1.5h3V2a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v1.5A1.5 1.5 0 0 1 14 5v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 12.5V5a1.5 1.5 0 0 1 1.5-1.5zm6.446 4.62a.625.625 0 0 0-.976-.781L5.137 8.13a.625.625 0 0 0 .488 1.016h1.582l-1.185 1.778a.625.625 0 1 0 1.04.694l1.833-2.75a.625.625 0 0 0-.52-.972h-1.45z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCarBatteryChargingSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
