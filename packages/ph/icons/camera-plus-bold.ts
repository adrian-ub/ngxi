import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCameraPlusBoldIcon],svg[ph-camera-plus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 136a12 12 0 0 1-12 12h-20v20a12 12 0 0 1-24 0v-20H96a12 12 0 0 1 0-24h20v-20a12 12 0 0 1 24 0v20h20a12 12 0 0 1 12 12m64-56v112a28 28 0 0 1-28 28H48a28 28 0 0 1-28-28V80a28 28 0 0 1 28-28h25.58l10.06-15.09A20 20 0 0 1 100.28 28h55.44a20 20 0 0 1 16.64 8.91L182.42 52H208a28 28 0 0 1 28 28m-24 0a4 4 0 0 0-4-4h-32a12 12 0 0 1-10-5.34L153.58 52h-51.16L90 70.66A12 12 0 0 1 80 76H48a4 4 0 0 0-4 4v112a4 4 0 0 0 4 4h160a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhCameraPlusBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
