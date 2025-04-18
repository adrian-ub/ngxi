import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityLinkLineIcon],svg[clarity-link-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.6 24.32l-2.46 2.44a4 4 0 0 1-5.62 0a3.92 3.92 0 0 1 0-5.55l4.69-4.65a4 4 0 0 1 5.62 0a3.86 3.86 0 0 1 1 1.71a2 2 0 0 0 .27-.27l1.29-1.28a5.9 5.9 0 0 0-1.15-1.62a6 6 0 0 0-8.44 0l-4.7 4.69a5.91 5.91 0 0 0 0 8.39a6 6 0 0 0 8.44 0l3.65-3.62h-.5a8 8 0 0 1-2.09-.24" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M28.61 7.82a6 6 0 0 0-8.44 0l-3.65 3.62h.49a8 8 0 0 1 2.1.28l2.46-2.44a4 4 0 0 1 5.62 0a3.92 3.92 0 0 1 0 5.55l-4.69 4.65a4 4 0 0 1-5.62 0a3.86 3.86 0 0 1-1-1.71a2 2 0 0 0-.28.23l-1.29 1.28a5.9 5.9 0 0 0 1.15 1.62a6 6 0 0 0 8.44 0l4.69-4.65a5.92 5.92 0 0 0 0-8.39Z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityLinkLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
