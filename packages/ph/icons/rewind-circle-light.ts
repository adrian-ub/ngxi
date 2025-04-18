import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phRewindCircleLightIcon],svg[ph-rewind-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m46.68-131.37a6 6 0 0 0-6.28.57L122 122V92a6 6 0 0 0-9.6-4.8l-48 36a6 6 0 0 0 0 9.6l48 36a6 6 0 0 0 9.6-4.8v-30l46.4 34.8a6 6 0 0 0 9.6-4.8V92a6 6 0 0 0-3.32-5.37M110 152l-32-24l32-24Zm56 0l-32-24l32-24Z"></svg:path>`,
})
export class PhRewindCircleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
