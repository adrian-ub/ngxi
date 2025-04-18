import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxVideoRecordingIcon],svg[bx-video-recording-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 9c0-1.103-.897-2-2-2h-1.434l-2.418-4.029A2.01 2.01 0 0 0 10.434 2H5v2h5.434l1.8 3H4c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-3l4 2v-7l-4 2zm-1.998 9H4V9h12l.001 4H16v1l.001.001z"></svg:path><svg:path fill="currentColor" d="M6 14h6v2H6z"></svg:path>`,
})
export class BxVideoRecordingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
