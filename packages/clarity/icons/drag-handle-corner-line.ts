import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityDragHandleCornerLineIcon],svg[clarity-drag-handle-corner-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="24" r="1.5" fill="currentColor" class="clr-i-outline clr-i-outline-path-1"></svg:circle><svg:circle cx="18" cy="24" r="1.5" fill="currentColor" class="clr-i-outline clr-i-outline-path-2"></svg:circle><svg:circle cx="18" cy="18" r="1.5" fill="currentColor" class="clr-i-outline clr-i-outline-path-3"></svg:circle><svg:circle cx="24" cy="12" r="1.5" fill="currentColor" class="clr-i-outline clr-i-outline-path-4"></svg:circle><svg:circle cx="24" cy="24" r="1.5" fill="currentColor" class="clr-i-outline clr-i-outline-path-5"></svg:circle><svg:circle cx="24" cy="18" r="1.5" fill="currentColor" class="clr-i-outline clr-i-outline-path-6"></svg:circle><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityDragHandleCornerLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
