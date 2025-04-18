import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaEyeOff2OutlineIcon],svg[eva-eye-off-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.81 13.39A8.93 8.93 0 0 0 21 7.62a1 1 0 1 0-2-.24a7.07 7.07 0 0 1-14 0a1 1 0 1 0-2 .24a8.93 8.93 0 0 0 3.18 5.77l-2.3 2.32a1 1 0 0 0 1.41 1.41l2.61-2.6a9 9 0 0 0 3.1.92V19a1 1 0 0 0 2 0v-3.56a9 9 0 0 0 3.1-.92l2.61 2.6a1 1 0 0 0 1.41-1.41Z"></svg:path>`,
})
export class EvaEyeOff2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
