import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidChurchTwoIcon],svg[icon-park-solid-church-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSChurchTwo0"><svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" stroke-linejoin="round" d="m13 24l11-10l11 10v20H13z"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" d="m7 8l3-4l3 4v36H7zm28 0l3-4l3 4v36h-6z"></svg:path><svg:path stroke="#000" d="M24 25v10m-4-6h8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSChurchTwo0)"></svg:path>`,
})
export class IconParkSolidChurchTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
