import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceRecordingStudioIcon],svg[guidance-recording-studio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M12 19.5c5 0 7.5-2 7.5-2V8M12 19.5c-5 0-7.5-2-7.5-2V8M12 19.5v4m0 0H7m5 0h5m-9.5-19H10m4 0h2.5m-9 4H10m4 0h2.5m-9 4H10m4 0h2.5M12 .5c-1.838 0-3.338.27-4.5.612v14.776c1.162.342 2.662.612 4.5.612s3.338-.27 4.5-.612V1.112C15.338.77 13.838.5 12 .5Z"></svg:path>`,
})
export class GuidanceRecordingStudioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
