import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsCopyleftIcon],svg[flat-color-icons-copyleft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21" fill="#9C27B0"></svg:circle><svg:path fill="#E1BEE7" d="M19.3 28.1c.3 1.3.2 4.1 4.6 4.1c.9 0 4.8.2 4.7-7.2v-1.6c0-6.7-3.2-7.2-4.8-7.2c-2.3 0-4.2.6-4.5 4.3h-4.8c.1-1.2.8-8.2 9.3-8.2c4.2 0 9.7 2.5 9.7 11.2V25c0 9.6-6.5 11.2-9.6 11.2c-3.7 0-8.7-1.6-9.3-8.1z"></svg:path>`,
})
export class FlatColorIconsCopyleftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
