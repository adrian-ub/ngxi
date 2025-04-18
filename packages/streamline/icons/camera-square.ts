import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCameraSquareIcon],svg[streamline-camera-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5.5h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1"></svg:path><svg:path d="M10.5 6a1 1 0 0 0-1-1H9L8 3.5H6L5 5h-.5a1 1 0 0 0-1 1v2.5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1z"></svg:path><svg:path d="M7 7.375a.375.375 0 1 1 0-.75m0 .75a.375.375 0 1 0 0-.75"></svg:path></svg:g>`,
})
export class StreamlineCameraSquareIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
