import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSkipForwardCircleFillIcon],svg[ph-skip-forward-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m40 144a8 8 0 0 1-16 0v-30.17l-51.35 36.68A8 8 0 0 1 88 168V88a8 8 0 0 1 12.65-6.51L152 118.17V88a8 8 0 0 1 16 0Z"></svg:path>`,
})
export class PhSkipForwardCircleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
