import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineRotationHorizontalIcon],svg[icon-park-outline-rotation-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="m20 31l4 4l-4 4"></svg:path><svg:path d="M32 34.168C39.064 32.625 44 29.1 44 25c0-5.523-8.954-10-20-10S4 19.477 4 25s8.954 10 20 10"></svg:path></svg:g>`,
})
export class IconParkOutlineRotationHorizontalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
