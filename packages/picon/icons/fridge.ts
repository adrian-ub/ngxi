import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconFridgeIcon],svg[picon-fridge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2V1h1v1M2 6V4h1v2M1 3.5V8h6V3.5M1 0v3h6V0"></svg:path>`,
})
export class PiconFridgeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
