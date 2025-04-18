import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCameraLoadingIcon],svg[streamline-camera-loading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 5a1 1 0 0 0-1-1h-2L9 2H5L3.5 4h-2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1z"></svg:path><svg:path d="M4.292 8a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m2.596.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5M9.75 8a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineCameraLoadingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
