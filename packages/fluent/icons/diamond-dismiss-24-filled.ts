import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDiamondDismiss24FilledIcon],svg[fluent-diamond-dismiss-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.952 14.299a3.25 3.25 0 0 1 0-4.597l6.75-6.75a3.25 3.25 0 0 1 4.597 0l6.75 6.75a3.25 3.25 0 0 1 0 4.597l-6.75 6.75a3.25 3.25 0 0 1-4.597 0zm6.828-5.58A.75.75 0 0 0 8.72 9.78L10.94 12l-2.22 2.22a.75.75 0 1 0 1.06 1.06L12 13.06l2.22 2.22a.75.75 0 1 0 1.06-1.06L13.06 12l2.22-2.22a.75.75 0 0 0-1.06-1.06L12 10.94z"></svg:path>`,
})
export class FluentDiamondDismiss24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
