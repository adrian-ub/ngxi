import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCamerarollIcon],svg[picon-cameraroll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8V1h1V0h2v1h1v1h4v6M4 3v1h1V3m1 0v1h1V3M6 6v1h1V6M4 6v1h1V6"></svg:path>`,
})
export class PiconCamerarollIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
