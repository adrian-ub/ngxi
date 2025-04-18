import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxWifi0Icon],svg[bx-wifi-0-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="18" r="2" fill="currentColor"></svg:circle>`,
})
export class BxWifi0Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
