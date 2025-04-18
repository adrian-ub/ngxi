import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamCameraFIcon],svg[jam-camera-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.126 3C4.57 1.275 6.136 0 8 0h4a4 4 0 0 1 3.874 3H16a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zM10 13a4 4 0 1 0 0-8a4 4 0 0 0 0 8m6-5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-6 3a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class JamCameraFIcon {
  readonly viewBox = input("-2 -4 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
