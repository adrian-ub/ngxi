import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityListLineIcon],svg[clarity-list-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 8h9v2h-9z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M15 12h9v2h-9z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M15 16h9v2h-9z" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="currentColor" d="M15 20h9v2h-9z" class="clr-i-outline clr-i-outline-path-4"></svg:path><svg:path fill="currentColor" d="M15 24h9v2h-9z" class="clr-i-outline clr-i-outline-path-5"></svg:path><svg:path fill="currentColor" d="M11 8h2v2h-2z" class="clr-i-outline clr-i-outline-path-6"></svg:path><svg:path fill="currentColor" d="M11 12h2v2h-2z" class="clr-i-outline clr-i-outline-path-7"></svg:path><svg:path fill="currentColor" d="M11 16h2v2h-2z" class="clr-i-outline clr-i-outline-path-8"></svg:path><svg:path fill="currentColor" d="M11 20h2v2h-2z" class="clr-i-outline clr-i-outline-path-9"></svg:path><svg:path fill="currentColor" d="M11 24h2v2h-2z" class="clr-i-outline clr-i-outline-path-10"></svg:path><svg:path fill="currentColor" d="M28 2H8a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m0 30H8V4h20Z" class="clr-i-outline clr-i-outline-path-11"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityListLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
