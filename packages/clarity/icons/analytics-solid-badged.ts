import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityAnalyticsSolidBadgedIcon],svg[clarity-analytics-solid-badged-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m30.32 13.48l1.06.8l-8.82 11.66l-7.1-10.58l-6.34 9.28l-4.5-4L6 19.05l2.7 2.39l6.76-9.88l7.19 10.71l6.66-8.81A7.44 7.44 0 0 1 22.57 5H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V12.34a7.45 7.45 0 0 1-3.68 1.14" class="clr-i-solid--badged clr-i-solid-path-1--badged"></svg:path><svg:circle cx="30" cy="6" r="5" fill="currentColor" class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge"></svg:circle><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityAnalyticsSolidBadgedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
