import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsKeyframeIcon],svg[hugeicons-keyframe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.382 5.005C10.59 3.668 11.194 3 12 3s1.41.668 2.618 2.005l2.972 3.288C19.197 10.07 20 10.959 20 12s-.803 1.93-2.41 3.707l-2.972 3.288C13.41 20.332 12.806 21 12 21s-1.41-.668-2.618-2.005L6.41 15.707C4.803 13.93 4 13.042 4 12s.803-1.93 2.41-3.707z" color="currentColor"></svg:path>`,
})
export class HugeiconsKeyframeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
