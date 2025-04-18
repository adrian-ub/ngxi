import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityReplayOneLineIcon],svg[clarity-replay-one-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 27.27a1 1 0 0 0 1-1V14a1 1 0 0 0-1-1a3.8 3.8 0 0 0-1.1.23l-2 .62a.92.92 0 0 0-.72.86a.88.88 0 0 0 .88.86a1.5 1.5 0 0 0 .43-.08l1.51-.42v11.2a1 1 0 0 0 1 1" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M18.06 5h-6.7l2.92-2.64A1 1 0 0 0 12.94.88L7.32 6l5.62 5a1 1 0 0 0 .67.26a1 1 0 0 0 .74-.33a1 1 0 0 0-.07-1.42L11.46 7h6.6A11.78 11.78 0 1 1 7.71 24.41a1 1 0 0 0-1.71.95A13.78 13.78 0 1 0 18.06 5" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityReplayOneLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
