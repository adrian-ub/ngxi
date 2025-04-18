import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmCameraVideoIcon],svg[charm-camera-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1.75 4.75h7.5v7.5h-7.5zm8 2.5l4.5-2.5v7.5l-4.5-2.5"></svg:path>`,
})
export class CharmCameraVideoIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
