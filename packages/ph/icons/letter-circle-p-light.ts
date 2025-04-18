import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLetterCirclePLightIcon],svg[ph-letter-circle-p-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m8-136h-32a6 6 0 0 0-6 6v80a6 6 0 0 0 12 0v-18h26a34 34 0 0 0 0-68m0 56h-26V94h26a22 22 0 0 1 0 44"></svg:path>`,
})
export class PhLetterCirclePLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
