import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityCollapseCardSolidIcon],svg[clarity-collapse-card-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="32" height="8" x="2" y="22" fill="currentColor" class="clr-i-solid clr-i-solid-path-1" rx="1" ry="1"></svg:rect><svg:path fill="currentColor" d="m18 20.7l-5.79-5.79a1 1 0 0 1 0-1.41a1 1 0 0 1 1.41 0L18 17.87l4.38-4.37a1 1 0 0 1 1.41 0a1 1 0 0 1 0 1.41Z" class="clr-i-solid clr-i-solid-path-2"></svg:path><svg:path fill="currentColor" d="m18 14.5l-5.79-5.79a1 1 0 0 1 0-1.42a1 1 0 0 1 1.41 0L18 11.67l4.38-4.38a1 1 0 0 1 1.41 0a1 1 0 0 1 0 1.42Z" class="clr-i-solid clr-i-solid-path-3"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityCollapseCardSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
