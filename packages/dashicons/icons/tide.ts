import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsTideIcon],svg[dashicons-tide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 12.8V17h14V9.9c-2.5.6-4.8 1.6-7 3V10c-2.2 1.3-4.5 2.3-7 2.8M17 3H3v7.1c2.5-.6 4.9-1.6 7-3.1v3c2.1-1.4 4.5-2.3 7-2.8z"></svg:path>`,
})
export class DashiconsTideIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
