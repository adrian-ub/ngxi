import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsDownIcon],svg[flat-color-icons-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#3F51B5"><svg:path d="M24 44L12.3 30h23.4z"></svg:path><svg:path d="M20 6h8v27h-8z"></svg:path></svg:g>`,
})
export class FlatColorIconsDownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
