import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFrontCameraIcon],svg[streamline-front-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.96 6.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m4.083.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5M4.555 8.857c.477.485 1.318.929 2.443.929s1.967-.444 2.444-.929"></svg:path><svg:path d="M13.5 4.5a1 1 0 0 0-1-1h-2L9 1.5H5l-1.5 2h-2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1z"></svg:path></svg:g>`,
})
export class StreamlineFrontCameraIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
