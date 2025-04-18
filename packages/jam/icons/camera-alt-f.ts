import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamCameraAltFIcon],svg[jam-camera-alt-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 12H0V6a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6zm0 2a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6zM6 15a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2zm4-4a4 4 0 1 0 0-8a4 4 0 0 0 0 8m6 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-6-2a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class JamCameraAltFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
