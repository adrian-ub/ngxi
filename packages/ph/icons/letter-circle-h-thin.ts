import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLetterCircleHThinIcon],svg[ph-letter-circle-h-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m36-132v80a4 4 0 0 1-8 0v-36h-56v36a4 4 0 0 1-8 0V88a4 4 0 0 1 8 0v36h56V88a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhLetterCircleHThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
