import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixWaveformIcon],svg[ix-waveform-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M426.667 213.334h42.667v85.333h-42.667zm-64-64h42.667v213.333h-42.667zm-64 21.333h42.667v170.667h-42.667zm-64-64h42.667v298.667h-42.667zm-192 106.667h42.667v85.333H42.667zm64-64h42.667v213.333h-42.667zm64-106.667h42.667v426.667h-42.667z"></svg:path>`,
})
export class IxWaveformIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
