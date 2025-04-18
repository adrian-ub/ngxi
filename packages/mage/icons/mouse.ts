import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageMouseIcon],svg[mage-mouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.5 9.286C19.5 5.538 16.142 2.5 12 2.5S4.5 5.538 4.5 9.286v5.428c0 3.748 3.358 6.786 7.5 6.786s7.5-3.038 7.5-6.786zM12 10.643V2.5m-7.5 8.143h15"></svg:path>`,
})
export class MageMouseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
