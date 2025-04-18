import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityFileGroupLineIcon],svg[clarity-file-group-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M31 34H13a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v22a1 1 0 0 1-1 1m-17-2h16V12H14Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M16 16h12v2H16z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M16 20h12v2H16z" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="currentColor" d="M16 24h12v2H16z" class="clr-i-outline clr-i-outline-path-4"></svg:path><svg:path fill="currentColor" d="M6 24V4h18V3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h1Z" class="clr-i-outline clr-i-outline-path-5"></svg:path><svg:path fill="currentColor" d="M10 28V8h18V7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h1Z" class="clr-i-outline clr-i-outline-path-6"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityFileGroupLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
