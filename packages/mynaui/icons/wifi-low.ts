import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiWifiLowIcon],svg[mynaui-wifi-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 16.157a5.657 5.657 0 0 0-8 0m4 3.093v-.5"></svg:path>`,
})
export class MynauiWifiLowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
