import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamVolumeDownCircleIcon],svg[jam-volume-down-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m-3.962-4.77a2 2 0 0 1-2-2v-2.5a2 2 0 0 1 2-2h1.005l1.823-1.709a2 2 0 0 1 1.367-.54h.205a1.6 1.6 0 0 1 1.6 1.6v7.8a1.6 1.6 0 0 1-1.6 1.6h-.205a2 2 0 0 1-1.367-.542L7.043 13.23zm1.795-4.5H6.038v2.5h1.795l2.205 2.067V6.664zm5.87.26a1 1 0 1 1 0-2a3 3 0 0 1 0 6a1 1 0 1 1 0-2a1 1 0 0 0 0-2"></svg:path>`,
})
export class JamVolumeDownCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
