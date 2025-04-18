import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[claritySignInLineIcon],svg[clarity-sign-in-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 4H12a2 2 0 0 0-2 2h18v24H12v-9.8h-2V30a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M15.12 18.46a1 1 0 1 0 1.41 1.41l5.79-5.79l-5.78-5.79a1 1 0 0 0-1.41 1.41L18.5 13H4a1 1 0 0 0-1 1a1 1 0 0 0 1 1h14.5Z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClaritySignInLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
