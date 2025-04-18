import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsAddImageIcon],svg[flat-color-icons-add-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#8CBCD6" d="M40 41H8c-2.2 0-4-1.8-4-4V11c0-2.2 1.8-4 4-4h32c2.2 0 4 1.8 4 4v26c0 2.2-1.8 4-4 4"></svg:path><svg:circle cx="35" cy="16" r="3" fill="#B3DDF5"></svg:circle><svg:path fill="#9AC9E3" d="M20 16L9 32h22z"></svg:path><svg:path fill="#B3DDF5" d="m31 22l-8 10h16z"></svg:path><svg:circle cx="38" cy="38" r="10" fill="#43A047"></svg:circle><svg:g fill="#fff"><svg:path d="M36 32h4v12h-4z"></svg:path><svg:path d="M32 36h12v4H32z"></svg:path></svg:g>`,
})
export class FlatColorIconsAddImageIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
