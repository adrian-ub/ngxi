import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamCameraIcon],svg[jam-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.676 5H4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1.676l-.387-1.501A2 2 0 0 0 12 2H8a2 2 0 0 0-1.937 1.499zm-1.55-2C4.57 1.275 6.136 0 8 0h4a4 4 0 0 1 3.874 3H16a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zM10 13a4 4 0 1 1 0-8a4 4 0 0 1 0 8m0-2a2 2 0 1 0 0-4a2 2 0 0 0 0 4m6-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class JamCameraIcon {
  readonly viewBox = input("-2 -4 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
