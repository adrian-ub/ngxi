import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityNeutralFaceLineIcon],svg[clarity-neutral-face-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24.05 22.06h-12a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m0 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:circle cx="25.16" cy="14.28" r="1.8" fill="currentColor" class="clr-i-outline clr-i-outline-path-3"></svg:circle><svg:circle cx="11.16" cy="14.28" r="1.8" fill="currentColor" class="clr-i-outline clr-i-outline-path-4"></svg:circle><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityNeutralFaceLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
