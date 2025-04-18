import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLetterCirclePThinIcon],svg[ph-letter-circle-p-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m8-136h-32a4 4 0 0 0-4 4v80a4 4 0 0 0 8 0v-20h28a32 32 0 0 0 0-64m0 56h-28V92h28a24 24 0 0 1 0 48"></svg:path>`,
})
export class PhLetterCirclePThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
