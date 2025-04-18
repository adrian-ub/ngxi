import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityPaintRollerSolidIcon],svg[clarity-paint-roller-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="27" height="10" x="4" y="2" fill="currentColor" class="clr-i-solid clr-i-solid-path-1" rx="1" ry="1"></svg:rect><svg:path fill="currentColor" d="M33 6h-1v6.24l-13.29 4.21a1 1 0 0 0-.71 1V19h-2v15a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V19h-2v-.82L33.29 14a1 1 0 0 0 .71-1V7a1 1 0 0 0-1-1" class="clr-i-solid clr-i-solid-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityPaintRollerSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
