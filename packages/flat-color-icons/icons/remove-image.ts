import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsRemoveImageIcon],svg[flat-color-icons-remove-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#8CBCD6" d="M40 41H8c-2.2 0-4-1.8-4-4V11c0-2.2 1.8-4 4-4h32c2.2 0 4 1.8 4 4v26c0 2.2-1.8 4-4 4"></svg:path><svg:circle cx="35" cy="16" r="3" fill="#B3DDF5"></svg:circle><svg:path fill="#9AC9E3" d="M20 16L9 32h22z"></svg:path><svg:path fill="#B3DDF5" d="m31 22l-8 10h16z"></svg:path><svg:circle cx="38" cy="38" r="10" fill="#F44336"></svg:circle><svg:g fill="#fff"><svg:path d="m43.31 41.181l-2.12 2.122l-8.485-8.484l2.121-2.122z"></svg:path><svg:path d="m34.819 43.31l-2.122-2.12l8.484-8.485l2.122 2.121z"></svg:path></svg:g>`,
})
export class FlatColorIconsRemoveImageIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
