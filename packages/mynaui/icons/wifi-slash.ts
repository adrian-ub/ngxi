import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiWifiSlashIcon],svg[mynaui-wifi-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 9.483a14.5 14.5 0 0 0-4.5-2.907M19 12.9a9.85 9.85 0 0 0-5-2.697M5 12.9a9.86 9.86 0 0 1 4-2.437m3 8.787v-.5M3 21L21 3M2 9.483A14.5 14.5 0 0 1 12 5.5m4 10.657a5.657 5.657 0 0 0-8 0"></svg:path>`,
})
export class MynauiWifiSlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
