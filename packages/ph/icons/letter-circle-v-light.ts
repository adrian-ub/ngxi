import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLetterCircleVLightIcon],svg[ph-letter-circle-v-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m37.57-119.77l-32 80a6 6 0 0 1-11.14 0l-32-80a6 6 0 1 1 11.14-4.46L128 159.84l26.43-66.07a6 6 0 0 1 11.14 4.46"></svg:path>`,
})
export class PhLetterCircleVLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
