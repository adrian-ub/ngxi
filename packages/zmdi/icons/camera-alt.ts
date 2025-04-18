import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiCameraAltIcon],svg[zmdi-camera-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m158 184l-1 2L79 51Q137 3 213 3q23 0 47 5zm259-32H211l78-135q46 17 79.5 52.5T417 152m5 21q5 22 5 43q0 83-57 144L269 184l-6-11zm-282 43l24 43H4q-4-22-4-43q0-82 56-144zM10 280h206l-78 135q-46-17-79.5-52.5T10 280m240 0l20-34l78 135q-59 48-135 48q-22 0-46-5z"></svg:path>`,
})
export class ZmdiCameraAltIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}
