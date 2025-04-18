import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityChildArrowLineIcon],svg[clarity-child-arrow-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24.82 15.8a1 1 0 0 0-1.41 0a1 1 0 0 0 0 1.41L27.2 21H9V3.78a1 1 0 1 0-2 0V21a2 2 0 0 0 2 2h18.15l-3.74 3.75a1 1 0 0 0 0 1.41a1 1 0 0 0 .7.29a1 1 0 0 0 .71-.29L31 22Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityChildArrowLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
