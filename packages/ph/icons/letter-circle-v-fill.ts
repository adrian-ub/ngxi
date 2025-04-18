import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLetterCircleVFillIcon],svg[ph-letter-circle-v-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m39.43 75l-32 80a8 8 0 0 1-14.86 0l-32-80a8 8 0 0 1 14.86-6L128 154.46L152.57 93a8 8 0 1 1 14.86 6"></svg:path>`,
})
export class PhLetterCircleVFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
