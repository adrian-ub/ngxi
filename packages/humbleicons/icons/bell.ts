import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsBellIcon],svg[humbleicons-bell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h2m0 0h10M7 17v-6a5 5 0 0 1 10 0v6m0 0h2M11.5 5.5V4a.5.5 0 0 1 1 0v1.5M13 20a1 1 0 1 1-2 0z"></svg:path>`,
})
export class HumbleiconsBellIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
