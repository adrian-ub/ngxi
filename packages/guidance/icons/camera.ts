import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceCameraIcon],svg[guidance-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M3 9.5h3m8 8a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9Zm9.5-11h-3a3 3 0 0 1-3-3h-7a3 3 0 0 1-3 3h-7v14h20a3 3 0 0 0 3-3z"></svg:path>`,
})
export class GuidanceCameraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
