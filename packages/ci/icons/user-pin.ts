import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciUserPinIcon],svg[ci-user-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 22l-3-3H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-4l-3 3ZM5 4v13h5l2 2l2-2h5V4H5Zm11 10.986H8V14.6a3.82 3.82 0 0 1 4-3.6a3.82 3.82 0 0 1 4 3.6v.386ZM12 10a1.934 1.934 0 0 1-2-2a1.935 1.935 0 0 1 2-2a1.935 1.935 0 0 1 2 2a1.934 1.934 0 0 1-2 2Z"></svg:path>`,
})
export class CiUserPinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
