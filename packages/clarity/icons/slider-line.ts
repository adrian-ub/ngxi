import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[claritySliderLineIcon],svg[clarity-slider-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12.37a4 4 0 0 0-3-3.89V5a1 1 0 1 0-2 0v3.48a4 4 0 0 0 0 7.78V31a1 1 0 1 0 2 0V16.26a4 4 0 0 0 3-3.89m-4 2a2 2 0 1 1 2-2a2 2 0 0 1-2 2.03Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M32 15.83a4 4 0 0 0-3-3.89V5a1 1 0 1 0-2 0v6.94a4 4 0 0 0 0 7.78V31a1 1 0 1 0 2 0V19.72a4 4 0 0 0 3-3.89m-4 2a2 2 0 1 1 2-2a2 2 0 0 1-2 2.04Z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M22 24.5a4 4 0 0 0-3-3.89V5a1 1 0 1 0-2 0v15.61a4 4 0 0 0 0 7.78V31a1 1 0 1 0 2 0v-2.61a4 4 0 0 0 3-3.89m-4 2a2 2 0 1 1 2-2a2 2 0 0 1-2 2.03Z" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClaritySliderLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
