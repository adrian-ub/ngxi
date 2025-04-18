import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamCameraAltIcon],svg[jam-camera-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 12V6a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4H2v-2zM6 0h8a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6V6a6 6 0 0 1 6-6m0 15h8a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2m4-4a4 4 0 1 1 0-8a4 4 0 0 1 0 8m0-2a2 2 0 1 0 0-4a2 2 0 0 0 0 4m6 2a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class JamCameraAltIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
