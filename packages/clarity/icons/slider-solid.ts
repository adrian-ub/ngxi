import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[claritySliderSolidIcon],svg[clarity-slider-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 9.29V5a1 1 0 1 0-2 0v4.3a3.22 3.22 0 0 0 0 6.11V31a1 1 0 1 0 2 0V15.43a3.22 3.22 0 0 0 0-6.14" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="currentColor" d="M19 21.45V5a1 1 0 1 0-2 0v16.47a3.22 3.22 0 0 0 0 6.11V31a1 1 0 1 0 2 0v-3.4a3.22 3.22 0 0 0 0-6.14Z" class="clr-i-solid clr-i-solid-path-2"></svg:path><svg:path fill="currentColor" d="M29 12.75V5a1 1 0 1 0-2 0v7.76a3.22 3.22 0 0 0 0 6.11V31a1 1 0 1 0 2 0V18.89a3.22 3.22 0 0 0 0-6.14" class="clr-i-solid clr-i-solid-path-3"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClaritySliderSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
