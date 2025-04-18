import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPauseCircleLightIcon],svg[ph-pause-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90M110 96v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0m48 0v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhPauseCircleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
