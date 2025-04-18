import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMetronomeBoldIcon],svg[ph-metronome-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m219.05 201.94l-27.4-86.12l25.23-27.75a12 12 0 0 0-17.76-16.14l-15.88 17.46l-15.1-47.45A19.93 19.93 0 0 0 149.08 28h-42.17a19.93 19.93 0 0 0-19.06 13.94l-50.91 160A20 20 0 0 0 56 228h144a20 20 0 0 0 19.06-26.06ZM179.25 156h-24.13L173 136.34ZM109.83 52h36.33l18.42 57.91L122.69 156H76.74ZM61.47 204l7.63-24h117.79l7.63 24Z"></svg:path>`,
})
export class PhMetronomeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
