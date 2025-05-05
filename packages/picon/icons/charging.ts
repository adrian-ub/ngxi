import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconChargingIcon],svg[picon-charging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4H4V1L3 5h1v3M2 8V1h1V0h2v1h1v7"></svg:path>`,
})
export class PiconChargingIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
