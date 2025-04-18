import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmCameraVideoSlashIcon],svg[charm-camera-video-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m11.25 10.75l3 1.5v-7.5l-5 2.5v-2.5h-2.5m1.5 7.5h-6.5v-7.5h1.5m-1.5-2.5l8.5 12"></svg:path>`,
})
export class CharmCameraVideoSlashIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
