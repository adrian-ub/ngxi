import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityEllipsisHorizontalOutlineBadgedIcon],svg[clarity-ellipsis-horizontal-outline-badged-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="31.1" cy="18" r="2.9" fill="currentColor" class="clr-i-outline--badged clr-i-outline-path-1--badged"></svg:circle><svg:circle cx="18" cy="18" r="2.9" fill="currentColor" class="clr-i-outline--badged clr-i-outline-path-2--badged"></svg:circle><svg:circle cx="4.9" cy="18" r="2.9" fill="currentColor" class="clr-i-outline--badged clr-i-outline-path-3--badged"></svg:circle><svg:circle cx="30" cy="6" r="5" fill="currentColor" class="clr-i-outline--badged clr-i-outline-path-4--badged clr-i-badge"></svg:circle><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityEllipsisHorizontalOutlineBadgedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
