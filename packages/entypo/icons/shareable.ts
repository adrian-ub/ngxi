import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoShareableIcon],svg[entypo-shareable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.8 10a3.2 3.2 0 1 0 6.401 0A3.2 3.2 0 0 0 6.8 10M4.529 8.8a5.6 5.6 0 0 1 9.43-2.76a1.2 1.2 0 1 0 1.697-1.697A8.002 8.002 0 0 0 2.367 7.601H0V10h3.199c.999 0 1.245-.813 1.33-1.2M16.8 10c-.999 0-1.245.814-1.329 1.199a5.6 5.6 0 0 1-9.43 2.759a1.2 1.2 0 0 0-1.698 1.697A7.97 7.97 0 0 0 10 18a8.005 8.005 0 0 0 7.633-5.6H20V10z"></svg:path>`,
})
export class EntypoShareableIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
