import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phWaveformSlashLightIcon],svg[ph-waveform-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M54 96v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0m-1.56-60a6 6 0 0 0-8.88 8L82 86.32V224a6 6 0 0 0 12 0V99.52l28 30.8V192a6 6 0 0 0 12 0v-48.48L203.56 220a6 6 0 0 0 8.88-8.08ZM88 42.43a6 6 0 0 0 6-6V32a6 6 0 0 0-12 0v4.43a6 6 0 0 0 6 6m40 44a6 6 0 0 0 6-6V64a6 6 0 0 0-12 0v16.43a6 6 0 0 0 6 6m40 44a6 6 0 0 0 6-6V96a6 6 0 0 0-12 0v28.43a6 6 0 0 0 6 6M208 74a6 6 0 0 0-6 6v88.43a6 6 0 0 0 12 0V80a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhWaveformSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
