import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityECheckLineIcon],svg[clarity-e-check-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 16h15v2H16z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M20 21h11v2H20z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M34 8H12.93a8.4 8.4 0 0 1 .79 2H33v16H3v-6.1a7.8 7.8 0 0 1-2-1.34V27a1 1 0 0 0 1 1h32a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="currentColor" d="M6.57 18.68a6.17 6.17 0 0 0 4.32-1.59a1.2 1.2 0 0 0 .36-.84a1.08 1.08 0 0 0-1.09-1.11a1 1 0 0 0-.71.25a4.32 4.32 0 0 1-2.84 1a3.35 3.35 0 0 1-3.46-3h7.53A1.29 1.29 0 0 0 12 12.06a5.68 5.68 0 0 0-5.73-5.92A6 6 0 0 0 .4 12.4a6 6 0 0 0 6.17 6.28M6.25 8.39c1.82 0 2.87 1.39 3 3.16H3.13c.25-1.86 1.43-3.16 3.12-3.16" class="clr-i-outline clr-i-outline-path-4"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityECheckLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
