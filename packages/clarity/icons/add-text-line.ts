import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityAddTextLineIcon],svg[clarity-add-text-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M31 21H13a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M12 16a1 1 0 0 0 1 1h18a1 1 0 0 0 0-2H13a1 1 0 0 0-1 1" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M27 27H13a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="currentColor" d="M15.89 9a1 1 0 0 0-1-1H10V3.21a1 1 0 0 0-2 0V8H2.89a1 1 0 0 0 0 2H8v5.21a1 1 0 0 0 2 0V10h4.89a1 1 0 0 0 1-1" class="clr-i-outline clr-i-outline-path-4"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityAddTextLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
