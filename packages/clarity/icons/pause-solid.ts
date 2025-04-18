import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityPauseSolidIcon],svg[clarity-pause-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="11" height="28" x="3.95" y="4" fill="currentColor" class="clr-i-solid clr-i-solid-path-1" rx="2.07" ry="2.07"></svg:rect><svg:rect width="11" height="28" x="20.95" y="4" fill="currentColor" class="clr-i-solid clr-i-solid-path-2" rx="2.07" ry="2.07"></svg:rect><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityPauseSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
