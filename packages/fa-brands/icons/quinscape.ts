import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faBrandsQuinscapeIcon],svg[fa-brands-quinscape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M313.6 474.6h-1a158.1 158.1 0 0 1 0-316.2c94.9 0 168.2 83.1 157 176.6c4 5.1 8.2 9.6 11.2 15.3c13.4-30.3 20.3-62.4 20.3-97.7C501.1 117.5 391.6 8 256.5 8S12 117.5 12 252.6s109.5 244.6 244.5 244.6a237.4 237.4 0 0 0 70.4-10.1c-5.2-3.5-8.9-8.1-13.3-12.5m-.1-.1l.4.1zm78.4-168.9a99.2 99.2 0 1 0 99.2 99.2a99.18 99.18 0 0 0-99.2-99.2"></svg:path>`,
})
export class FaBrandsQuinscapeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
