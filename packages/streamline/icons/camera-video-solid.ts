import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCameraVideoSolidIcon],svg[streamline-camera-video-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 3.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0M10.5 2a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M1.912 9.609c0-.89.721-1.612 1.612-1.612h6.114c.89 0 1.612.722 1.612 1.612v2.78c0 .89-.722 1.611-1.612 1.611H3.524c-.89 0-1.612-.722-1.612-1.612zm11.966.14a.75.75 0 1 0-1.5 0v2.5a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCameraVideoSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
