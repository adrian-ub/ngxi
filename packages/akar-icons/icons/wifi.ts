import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsWifiIcon],svg[akar-icons-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M2 10c6-6.667 14-6.667 20 0M6 14c3.6-4 8.4-4 12 0"></svg:path><svg:circle cx="12" cy="18" r="1"></svg:circle></svg:g>`,
})
export class AkarIconsWifiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
