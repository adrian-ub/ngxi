import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityExpandCardSolidIcon],svg[clarity-expand-card-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M33 6H3a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1m-9.21 15.41a1 1 0 0 1-1.41 0L18 17l-4.38 4.38a1 1 0 0 1-1.41 0a1 1 0 0 1 0-1.42L18 14.2l5.79 5.8a1 1 0 0 1 0 1.41m0-6.2a1 1 0 0 1-1.41 0L18 10.83l-4.38 4.38a1 1 0 0 1-1.41 0a1 1 0 0 1 0-1.42L18 8l5.79 5.79a1 1 0 0 1 0 1.42" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityExpandCardSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
