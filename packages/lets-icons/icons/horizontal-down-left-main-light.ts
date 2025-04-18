import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsHorizontalDownLeftMainLightIcon],svg[lets-icons-horizontal-down-left-main-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 8l.354-.354l.353.354l-.353.354L22 8Zm-10 .5a.5.5 0 0 1 0-1v1Zm6.354-4.854l4 4l-.708.708l-4-4l.708-.708Zm4 4.708l-4 4l-.708-.708l4-4l.708.708ZM22 8.5H12v-1h10v1ZM2 16l-.354-.354l-.353.354l.353.354L2 16Zm19 .5a.5.5 0 0 0 0-1v1ZM5.646 11.646l-4 4l.708.708l4-4l-.708-.708Zm-4 4.708l4 4l.708-.708l-4-4l-.708.708ZM2 16.5h19v-1H2v1Z"></svg:path>`,
})
export class LetsIconsHorizontalDownLeftMainLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
