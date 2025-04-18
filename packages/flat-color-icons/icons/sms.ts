import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsSmsIcon],svg[flat-color-icons-sms-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#009688" d="M37 39H11l-6 6V11c0-3.3 2.7-6 6-6h26c3.3 0 6 2.7 6 6v22c0 3.3-2.7 6-6 6"></svg:path><svg:g fill="#fff"><svg:circle cx="24" cy="22" r="3"></svg:circle><svg:circle cx="34" cy="22" r="3"></svg:circle><svg:circle cx="14" cy="22" r="3"></svg:circle></svg:g>`,
})
export class FlatColorIconsSmsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
