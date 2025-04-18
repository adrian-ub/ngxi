import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiBatteryXIcon],svg[mynaui-battery-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 7H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1m-8.5 3.5l3 3m0-3l-3 3M21 11v2"></svg:path>`,
})
export class MynauiBatteryXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
