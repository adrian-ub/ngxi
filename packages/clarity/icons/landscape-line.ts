import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityLandscapeLineIcon],svg[clarity-landscape-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 6H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m0 22H4V8h28Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M9 22a.82.82 0 0 0 .55-.21a.8.8 0 0 0 0-1.13L7.83 18.8h20.34l-1.72 1.86a.8.8 0 0 0 0 1.13a.82.82 0 0 0 .55.21a.78.78 0 0 0 .58-.26L31.09 18l-3.47-3.74a.79.79 0 0 0-1.13 0a.8.8 0 0 0 0 1.13l1.72 1.86H7.83l1.72-1.86a.8.8 0 0 0 0-1.13a.79.79 0 0 0-1.13 0L4.91 18l3.47 3.74A.78.78 0 0 0 9 22" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityLandscapeLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
