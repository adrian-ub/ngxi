import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonSunsetIcon],svg[carbon-sunset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 27.005h27.998v2H2zm14-7a4.005 4.005 0 0 1 4 4h2a6 6 0 0 0-12 0h2a4.005 4.005 0 0 1 4-4m9 2h5v2h-5zm-3.313-5.101l3.506-3.506l1.414 1.414l-3.506 3.506zM19.59 9.595L17 12.175v-8.17h-2v8.17l-2.59-2.58l-1.41 1.41l5 5l5-5zM5.394 14.812l1.414-1.414l3.506 3.506l-1.415 1.414zM2 22.005h5v2H2z"></svg:path>`,
})
export class CarbonSunsetIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
