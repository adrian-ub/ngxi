import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityMouseSolidIcon],svg[clarity-mouse-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2A10 10 0 0 0 8 12v12a10 10 0 0 0 20 0V12A10 10 0 0 0 18 2m1.3 11.44a1.3 1.3 0 0 1-2.6 0V10a1.3 1.3 0 0 1 2.6 0Z" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityMouseSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
