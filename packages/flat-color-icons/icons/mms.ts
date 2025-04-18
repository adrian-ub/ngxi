import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsMmsIcon],svg[flat-color-icons-mms-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#E91E63" d="M37 39H11l-6 6V11c0-3.3 2.7-6 6-6h26c3.3 0 6 2.7 6 6v22c0 3.3-2.7 6-6 6"></svg:path><svg:path fill="#F48FB1" d="M20 16.5L10 31h20z"></svg:path><svg:g fill="#F8BBD0"><svg:circle cx="34" cy="15" r="3"></svg:circle><svg:path d="m30 21l-8 10h16z"></svg:path></svg:g>`,
})
export class FlatColorIconsMmsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
