import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsHorizontalTopLeftMainLightIcon],svg[lets-icons-horizontal-top-left-main-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 8l-.354-.354L1.293 8l.353.354L2 8Zm19 .5a.5.5 0 0 0 0-1v1ZM5.646 3.646l-4 4l.708.708l4-4l-.708-.708Zm-4 4.708l4 4l.708-.708l-4-4l-.708.708ZM2 8.5h19v-1H2v1ZM22 16l.354-.354l.353.354l-.353.354L22 16Zm-9 .5a.5.5 0 0 1 0-1v1Zm5.354-4.854l4 4l-.708.708l-4-4l.708-.708Zm4 4.708l-4 4l-.708-.708l4-4l.708.708ZM22 16.5h-9v-1h9v1Z"></svg:path>`,
})
export class LetsIconsHorizontalTopLeftMainLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
