import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityRouterLineIcon],svg[clarity-router-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 14.87l5.11-5.14a1 1 0 1 0-1.42-1.41L19 11V3.33a1 1 0 0 0-2 0V11l-2.69-2.68a1 1 0 1 0-1.42 1.41Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="m18 21.13l-5.11 5.14a1 1 0 0 0 1.42 1.41L17 25v7.69a1 1 0 0 0 2 0V25l2.69 2.71a1 1 0 0 0 1.42-1.41Z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M28.85 12.89a1 1 0 0 0-1.41 1.42L30.15 17h-7.69a1 1 0 1 0 0 2h7.69l-2.71 2.69a1 1 0 0 0 1.41 1.42L34 18Z" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="currentColor" d="M5.85 19h7.69a1 1 0 0 0 0-2H5.85l2.71-2.69a1 1 0 1 0-1.41-1.42L2 18l5.14 5.11a1 1 0 1 0 1.41-1.42Z" class="clr-i-outline clr-i-outline-path-4"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityRouterLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
