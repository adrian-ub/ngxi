import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiPowerIcon],svg[zmdi-power-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213 0v213h-42V0zm103 46q68 58 68 146q0 80-56 136t-136 56t-136-56T0 192q0-88 68-146l30 30q-55 45-55 116q0 62 43.5 105.5T192 341t105.5-43.5T341 192q0-71-55-115z"></svg:path>`,
})
export class ZmdiPowerIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
