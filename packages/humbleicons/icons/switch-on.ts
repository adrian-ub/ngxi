import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsSwitchOnIcon],svg[humbleicons-switch-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15 6H9a6 6 0 1 0 0 12h6a6 6 0 0 0 0-12"></svg:path><svg:circle cx="15" cy="12" r="3" fill="currentColor"></svg:circle></svg:g>`,
})
export class HumbleiconsSwitchOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
