import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsControlsVolumeoffIcon],svg[dashicons-controls-volumeoff-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7h4l5-4v14l-5-4H2z"></svg:path>`,
})
export class DashiconsControlsVolumeoffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
