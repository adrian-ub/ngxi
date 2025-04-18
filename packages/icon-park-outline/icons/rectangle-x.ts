import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineRectangleXIcon],svg[icon-park-outline-rectangle-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 4L4 24l20 20l20-20z"></svg:path><svg:path stroke-linecap="round" d="M44 4L4 44M4 4l40 40"></svg:path></svg:g>`,
})
export class IconParkOutlineRectangleXIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
