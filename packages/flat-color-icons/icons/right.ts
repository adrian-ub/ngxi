import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsRightIcon],svg[flat-color-icons-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#3F51B5"><svg:path d="M44 24L30 35.7V12.3z"></svg:path><svg:path d="M6 20h27v8H6z"></svg:path></svg:g>`,
})
export class FlatColorIconsRightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
