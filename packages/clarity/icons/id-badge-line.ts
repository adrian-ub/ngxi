import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityIdBadgeLineIcon],svg[clarity-id-badge-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 22a4.23 4.23 0 1 0-4.23-4.23A4.23 4.23 0 0 0 18 22m0-6.86a2.63 2.63 0 1 1-2.63 2.63A2.63 2.63 0 0 1 18 15.14" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M22 4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v7h8Zm-2 5h-4V4h4Z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M26 30v-2.3a1.12 1.12 0 0 0-.26-.73A9.9 9.9 0 0 0 18 23.69A9.9 9.9 0 0 0 10.26 27a1.13 1.13 0 0 0-.26.73V30h1.6v-2.13a8.33 8.33 0 0 1 6.4-2.58a8.33 8.33 0 0 1 6.4 2.59V30Z" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="currentColor" d="M28 6h-4v2h4v24H8V8h4V6H8a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2" class="clr-i-outline clr-i-outline-path-4"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityIdBadgeLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
