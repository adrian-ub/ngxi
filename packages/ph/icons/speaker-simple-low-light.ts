import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSpeakerSimpleLowLightIcon],svg[ph-speaker-simple-low-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M162.64 26.61a6 6 0 0 0-6.32.65L85.94 82H40a14 14 0 0 0-14 14v64a14 14 0 0 0 14 14h45.94l70.38 54.74A6 6 0 0 0 166 224V32a6 6 0 0 0-3.36-5.39M154 211.73l-62.32-48.47A6 6 0 0 0 88 162H40a2 2 0 0 1-2-2V96a2 2 0 0 1 2-2h48a6 6 0 0 0 3.68-1.26L154 44.27ZM206 104v48a6 6 0 0 1-12 0v-48a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhSpeakerSimpleLowLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
