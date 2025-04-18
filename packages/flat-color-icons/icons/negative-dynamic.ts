import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsNegativeDynamicIcon],svg[flat-color-icons-negative-dynamic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00BCD4" d="M19 22h10v20H19zM6 8h10v34H6zm26 22h10v12H32z"></svg:path><svg:g fill="#3F51B5"><svg:path d="M42 12L32 22h10z"></svg:path><svg:path d="m27.561 10.396l2.828-2.828l9.969 9.969l-2.828 2.828z"></svg:path></svg:g>`,
})
export class FlatColorIconsNegativeDynamicIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
