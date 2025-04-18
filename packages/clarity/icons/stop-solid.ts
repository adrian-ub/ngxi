import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityStopSolidIcon],svg[clarity-stop-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="27.99" height="28" x="3.96" y="4" fill="currentColor" class="clr-i-solid clr-i-solid-path-1" rx="2" ry="2"></svg:rect><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityStopSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
