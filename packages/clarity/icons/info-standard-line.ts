import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityInfoStandardLineIcon],svg[clarity-info-standard-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="17.97" cy="10.45" r="1.4" fill="currentColor" class="clr-i-outline clr-i-outline-path-1"></svg:circle><svg:path fill="currentColor" d="M21 25h-2V14.1h-3a1 1 0 0 0 0 2h1V25h-2a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M18 34a16 16 0 1 1 16-16a16 16 0 0 1-16 16m0-30a14 14 0 1 0 14 14A14 14 0 0 0 18 4" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityInfoStandardLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
