import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityPinSolidIcon],svg[clarity-pin-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M33 16.71a1 1 0 0 1-.71-.29L19.7 3.82a1 1 0 0 1 1.41-1.41L33.71 15a1 1 0 0 1-.71 1.71" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="currentColor" d="m20.44 7.59l-6.79 6.79a10.94 10.94 0 0 0-10.24 2.84a1 1 0 0 0 0 1.42L9.73 25l-7.44 7.41a1 1 0 1 0 1.41 1.41l7.44-7.44l6.33 6.33a1 1 0 0 0 .71.29a1 1 0 0 0 .71-.3a11 11 0 0 0 2.84-10.24l6.79-6.79Z" class="clr-i-solid clr-i-solid-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityPinSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
