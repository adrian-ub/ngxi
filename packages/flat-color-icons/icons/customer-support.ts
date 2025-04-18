import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsCustomerSupportIcon],svg[flat-color-icons-customer-support-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFB74D" d="M29 43v-4.6l2.6.5c2.9.6 5.6-1.5 5.8-4.4L38 28l2.9-1.2c1-.4 1.4-1.6.8-2.6L38 18c-.6-7.6-4.9-15-16-15C10.6 3 5 11.4 5 20c0 3.7 1.3 6.9 3.3 9.6c1.8 2.5 2.7 5.5 2.7 8.5v4.8h18z"></svg:path><svg:path fill="#FF9800" d="M29 43v-4.6L22 37v6z"></svg:path><svg:circle cx="33.5" cy="21.5" r="1.5" fill="#784719"></svg:circle><svg:path fill="#FF5722" d="M21.4 3C12.3 3 5 10.3 5 19.4c0 11.1 6 11.4 6 18.6l2.6-.9c2.1-.7 3.9-2.3 4.7-4.4l2.8-6.8L27 23v-6s7-3.8 7-10.3C31 4.2 25.7 3 21.4 3"></svg:path><svg:path fill="#546E7A" d="M21 2.1c-.6 0-1 .4-1 1V17c0 .6.4 1 1 1s1-.4 1-1V3.1c0-.6-.4-1-1-1m15.9 29.8c-7.9 0-10.3-4.9-10.4-5.1c-.2-.5-.8-.7-1.3-.5s-.7.8-.5 1.3c.1.3 3 6.3 12.2 6.3c.6 0 1-.4 1-1s-.5-1-1-1"></svg:path><svg:circle cx="37" cy="33" r="2" fill="#37474F"></svg:circle><svg:circle cx="21" cy="23" r="7" fill="#37474F"></svg:circle><svg:circle cx="21" cy="23" r="4" fill="#546E7A"></svg:circle>`,
})
export class FlatColorIconsCustomerSupportIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
