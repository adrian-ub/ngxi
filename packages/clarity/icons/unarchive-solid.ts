import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityUnarchiveSolidIcon],svg[clarity-unarchive-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 21a3 3 0 0 1-2.22-1H5v12a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V20H20.21A3 3 0 0 1 18 21m4 3a1 1 0 0 1-1 1h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="currentColor" d="M15 12H5.5A1.5 1.5 0 0 0 4 13.5V18h11Z" class="clr-i-solid clr-i-solid-path-2"></svg:path><svg:path fill="currentColor" d="M30.5 12H21v6h11v-4.5a1.5 1.5 0 0 0-1.5-1.5" class="clr-i-solid clr-i-solid-path-3"></svg:path><svg:path fill="currentColor" d="m13 9.55l4-3.95V18a1 1 0 1 0 2 0V5.6l4 3.95a1 1 0 1 0 1.41-1.42L18 1.78l-6.39 6.35A1 1 0 0 0 13 9.55" class="clr-i-solid clr-i-solid-path-4"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityUnarchiveSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
