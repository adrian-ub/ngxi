import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityInfoCircleLineIcon],svg[clarity-info-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="17.93" cy="11.9" r="1.4" fill="currentColor" class="clr-i-outline clr-i-outline-path-1"></svg:circle><svg:path fill="currentColor" d="M21 23h-2v-8h-3a1 1 0 0 0 0 2h1v6h-2a1 1 0 1 0 0 2h6a1 1 0 0 0 0-2" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M18 6a12 12 0 1 0 12 12A12 12 0 0 0 18 6m0 22a10 10 0 1 1 10-10a10 10 0 0 1-10 10" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityInfoCircleLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
