import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityCheckboxListLineIcon],svg[clarity-checkbox-list-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M31.43 16H10v2h21.43a1 1 0 0 0 0-2" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M31.43 24H10v2h21.43a1 1 0 0 0 0-2" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M15.45 10h16a1 1 0 0 0 0-2h-14Z" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="currentColor" d="M17.5 3.42a1.09 1.09 0 0 0-1.55 0l-8.06 8.06l-3.38-3.64a1.1 1.1 0 1 0-1.61 1.5l4.94 5.3L17.5 5a1.1 1.1 0 0 0 0-1.58" class="clr-i-outline clr-i-outline-path-4"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityCheckboxListLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
