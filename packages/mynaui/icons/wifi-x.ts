import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiWifiXIcon],svg[mynaui-wifi-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 9.483A14.5 14.5 0 0 1 12 5.5M16 4l4 4m0-4l-4 4m3 4.9c-3.866-3.867-10.134-3.867-14 0m11 3.257a5.657 5.657 0 0 0-8 0m4 3.093v-.5"></svg:path>`,
})
export class MynauiWifiXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
