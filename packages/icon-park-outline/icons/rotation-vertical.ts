import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineRotationVerticalIcon],svg[icon-park-outline-rotation-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="m38 28l-4-4l-4 4"></svg:path><svg:path d="M33.168 16C31.625 8.936 28.1 4 24 4c-5.523 0-10 8.954-10 20s4.477 20 10 20s10-8.954 10-20"></svg:path></svg:g>`,
})
export class IconParkOutlineRotationVerticalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
