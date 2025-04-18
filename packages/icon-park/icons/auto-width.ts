import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAutoWidthIcon],svg[icon-park-auto-width-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M11.9876 32L4 24.0062L12 16"></svg:path><svg:path d="M36.0124 16L44 23.9939L36 32"></svg:path><svg:path d="M4 24L44 24"></svg:path></svg:g>`,
})
export class IconParkAutoWidthIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
