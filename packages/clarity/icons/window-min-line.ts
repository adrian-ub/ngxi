import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityWindowMinLineIcon],svg[clarity-window-min-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 27H9a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityWindowMinLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
