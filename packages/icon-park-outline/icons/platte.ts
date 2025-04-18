import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlinePlatteIcon],svg[icon-park-outline-platte-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 44c5.96 0 2.336-8.864 6-13c3.126-3.53 14-1.914 14-7c0-11.046-8.954-20-20-20S4 12.954 4 24s8.954 20 20 20Z"></svg:path><svg:path d="M28 17a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm-12 4a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm1 13a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z"></svg:path></svg:g>`,
})
export class IconParkOutlinePlatteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
