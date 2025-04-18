import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityShoppingBagSolidIcon],svg[clarity-shopping-bag-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 9.22a5 5 0 1 1 10 0V12h2V9.22a7 7 0 1 0-14 0V12h2Z" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="currentColor" d="M25 12v3.1a1 1 0 1 1-2 0V12H13v3.1a1 1 0 0 1-2 0V12H4v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V12Z" class="clr-i-solid clr-i-solid-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityShoppingBagSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
