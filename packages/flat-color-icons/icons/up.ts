import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsUpIcon],svg[flat-color-icons-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#3F51B5"><svg:path d="m24 4l11.7 14H12.3z"></svg:path><svg:path d="M20 15h8v27h-8z"></svg:path></svg:g>`,
})
export class FlatColorIconsUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
