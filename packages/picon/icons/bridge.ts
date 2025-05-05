import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBridgeIcon],svg[picon-bridge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 7c0-4-4-4-4 0H0V2h8v5"></svg:path>`,
})
export class PiconBridgeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
