import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxWifi1Icon],svg[bx-wifi-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.671 14.307C16.184 12.819 14.17 12 12 12s-4.184.819-5.671 2.307l1.414 1.414c1.11-1.11 2.621-1.722 4.257-1.722c1.636.001 3.147.612 4.257 1.722z"></svg:path><svg:circle cx="12" cy="18" r="2" fill="currentColor"></svg:circle>`,
})
export class BxWifi1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
