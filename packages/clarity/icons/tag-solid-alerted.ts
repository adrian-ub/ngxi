import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityTagSolidAlertedIcon],svg[clarity-tag-solid-alerted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28.46 15.73h-6.23A3.68 3.68 0 0 1 19 10.22l1.43-2.47l-3.1-3.15a2 2 0 0 0-1.41-.6H6a2 2 0 0 0-2 2v9.92a2 2 0 0 0 .59 1.41l14.6 14.6a2 2 0 0 0 2.83 0l9.9-9.9a2 2 0 0 0 0-2.83ZM9.65 11.31a1.66 1.66 0 1 1 1.66-1.66a1.66 1.66 0 0 1-1.66 1.66" class="clr-i-solid--alerted clr-i-solid-path-1--alerted"></svg:path><svg:path fill="currentColor" d="m26.85 1.47l-5.72 9.91a1.28 1.28 0 0 0 1.1 1.91h11.45a1.28 1.28 0 0 0 1.1-1.91l-5.72-9.91a1.28 1.28 0 0 0-2.21 0" class="clr-i-solid--alerted clr-i-solid-path-2--alerted clr-i-alert"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityTagSolidAlertedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
