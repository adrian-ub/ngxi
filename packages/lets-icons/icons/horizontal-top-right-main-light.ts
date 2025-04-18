import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsHorizontalTopRightMainLightIcon],svg[lets-icons-horizontal-top-right-main-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 8l.354-.354l.353.354l-.353.354L22 8ZM3 8.5a.5.5 0 0 1 0-1v1Zm15.354-4.854l4 4l-.708.708l-4-4l.708-.708Zm4 4.708l-4 4l-.708-.708l4-4l.708.708ZM22 8.5H3v-1h19v1ZM2 16l-.354-.354l-.353.354l.353.354L2 16Zm9 .5a.5.5 0 0 0 0-1v1Zm-5.354-4.854l-4 4l.708.708l4-4l-.708-.708Zm-4 4.708l4 4l.708-.708l-4-4l-.708.708ZM2 16.5h9v-1H2v1Z"></svg:path>`,
})
export class LetsIconsHorizontalTopRightMainLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
