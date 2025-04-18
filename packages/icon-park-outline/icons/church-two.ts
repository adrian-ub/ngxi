import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineChurchTwoIcon],svg[icon-park-outline-church-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="m13 24l11-10l11 10v20H13zM7 8l3-4l3 4v36H7zm28 0l3-4l3 4v36h-6z"></svg:path><svg:path d="M24 25v10m-4-6h8"></svg:path></svg:g>`,
})
export class IconParkOutlineChurchTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
