import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideWifiHighIcon],svg[lucide-wifi-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 20h.01M5 12.859a10 10 0 0 1 14 0m-10.5 3.57a5 5 0 0 1 7 0"></svg:path>`,
})
export class LucideWifiHighIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
