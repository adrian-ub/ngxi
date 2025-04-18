import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLetterCircleVThinIcon],svg[ph-letter-circle-v-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m35.71-122.51l-32 80a4 4 0 0 1-7.42 0l-32-80a4 4 0 1 1 7.42-3L128 165.23l28.29-70.72a4 4 0 1 1 7.42 3Z"></svg:path>`,
})
export class PhLetterCircleVThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
