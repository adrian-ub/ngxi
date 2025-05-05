import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCameraIcon],svg[picon-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6c2 0 2-3 0-3S2 6 4 6M0 7V2h2V1h4v1h2v5"></svg:path>`,
})
export class PiconCameraIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
