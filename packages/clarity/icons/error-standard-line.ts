import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityErrorStandardLineIcon],svg[clarity-error-standard-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="18" cy="26.06" r="1.33" fill="currentColor" class="clr-i-outline clr-i-outline-path-1"></svg:circle><svg:path fill="currentColor" d="M18 22.61a1 1 0 0 1-1-1v-12a1 1 0 1 1 2 0v12a1 1 0 0 1-1 1" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M18 34a16 16 0 1 1 16-16a16 16 0 0 1-16 16m0-30a14 14 0 1 0 14 14A14 14 0 0 0 18 4" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityErrorStandardLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
