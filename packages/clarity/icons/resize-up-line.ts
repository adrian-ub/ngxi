import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityResizeUpLineIcon],svg[clarity-resize-up-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 4a1 1 0 0 0 0 2h9.59l-9.25 9.25a1 1 0 1 0 1.41 1.41L30 7.41V17a1 1 0 0 0 2 0V4Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M4 19a1 1 0 0 1 2 0v9.59l9.25-9.25a1 1 0 1 1 1.41 1.41L7.41 30H17a1 1 0 0 1 0 2H4Z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityResizeUpLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
