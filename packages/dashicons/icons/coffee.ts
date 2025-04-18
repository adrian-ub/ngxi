import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsCoffeeIcon],svg[dashicons-coffee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 15c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2zm2-3.8v.8c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2V4H5.6C3.6 4 2 5.4 2 7.6c0 2.3 1.6 3.6 3.6 3.6zM3.9 7.6c0-1 .7-1.8 1.7-1.8H6v3.6h-.4c-1 0-1.7-.7-1.7-1.8"></svg:path>`,
})
export class DashiconsCoffeeIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
