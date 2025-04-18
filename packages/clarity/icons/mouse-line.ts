import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityMouseLineIcon],svg[clarity-mouse-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 34A10 10 0 0 1 8 24V12a10 10 0 0 1 20 0v12a10 10 0 0 1-10 10m0-30a8 8 0 0 0-8 8v12a8 8 0 0 0 16 0V12a8 8 0 0 0-8-8" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M18 15a1 1 0 0 1-1-1v-4a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityMouseLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
