import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityTableLineIcon],svg[clarity-table-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 34a1 1 0 0 1-1-1V2.92a1 1 0 0 1 2 0V33a1 1 0 0 1-1 1" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M17 33.92a1 1 0 0 1-1-1V9.1a1 1 0 1 1 2 0v23.82a1 1 0 0 1-1 1" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M26 34a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v24a1 1 0 0 1-1 1" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="currentColor" d="M33.11 18h-25a1 1 0 1 1 0-2h25a1 1 0 1 1 0 2" class="clr-i-outline clr-i-outline-path-4"></svg:path><svg:path fill="currentColor" d="M33.1 26.94h-25a1 1 0 1 1 0-1.94h25a1 1 0 1 1 0 1.92Z" class="clr-i-outline clr-i-outline-path-5"></svg:path><svg:path fill="currentColor" d="M33 8.92H3A1 1 0 1 1 3 7h30a1 1 0 1 1 0 1.94Z" class="clr-i-outline clr-i-outline-path-6"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityTableLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
