import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phRewindBoldIcon],svg[ph-rewind-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M225.7 54.46a20 20 0 0 0-20.33.66L132 101.85v-30a19.91 19.91 0 0 0-30.63-16.72l-88.18 56.16a19.79 19.79 0 0 0 0 33.42l88.18 56.17A19.91 19.91 0 0 0 132 184.16v-30l73.37 46.73A19.91 19.91 0 0 0 236 184.16V71.84a19.84 19.84 0 0 0-10.3-17.38M108 176.64L31.63 128L108 79.36Zm104 0L135.63 128L212 79.36Z"></svg:path>`,
})
export class PhRewindBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
