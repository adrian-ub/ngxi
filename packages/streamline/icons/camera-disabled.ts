import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCameraDisabledIcon],svg[streamline-camera-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h8.219m-4.04-6.321a2.25 2.25 0 0 1 3.143 3.143"></svg:path><svg:path d="M3.714 3.714L5 2h4l1.5 2h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H12M4.778 7.145a2.25 2.25 0 0 0 2.577 2.577M13.5 13.5L.5.5"></svg:path></svg:g>`,
})
export class StreamlineCameraDisabledIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
