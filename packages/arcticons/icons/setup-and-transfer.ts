import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSetupAndTransferIcon],svg[arcticons-setup-and-transfer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m17.692 22.488l3.942 3.916l8.67-8.614m-7.699 23.215h2.79m-4.31-34.634h5.825M13.065 38.594h21.87M13.069 8.408H34.93M18.425 4.5h11.15c2.971 0 5.36 1.78 5.36 3.992v31.017c0 2.21-2.389 3.991-5.36 3.991h-11.15c-2.971 0-5.36-1.776-5.36-3.991V8.492c0-2.212 2.389-3.992 5.36-3.992"></svg:path>`,
})
export class ArcticonsSetupAndTransferIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
