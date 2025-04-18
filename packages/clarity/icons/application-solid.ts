import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityApplicationSolidIcon],svg[clarity-application-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 4H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 6.2H4V6h28Z" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="currentColor" d="M5 7h2v2H5z" class="clr-i-solid clr-i-solid-path-2"></svg:path><svg:path fill="currentColor" d="M9 7h2v2H9z" class="clr-i-solid clr-i-solid-path-3"></svg:path><svg:path fill="currentColor" d="M13 7h2v2h-2z" class="clr-i-solid clr-i-solid-path-4"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityApplicationSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
