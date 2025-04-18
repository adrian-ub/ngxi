import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceBinThrowPersonIcon],svg[guidance-bin-throw-person-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M22 15c-1.5 3-1.5 5.833-1.5 8.5h-6c0-2.667 0-5.5-1.5-8.5m0-3.5H9.854a2 2 0 0 1-1.857-1.257L6.5 6.5h-.59a2.5 2.5 0 0 0-2.474 2.136L2.5 15v9m4-9v9m9.75-10a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5ZM5.85 4.5s-1.6-1-1.6-2.25a1.747 1.747 0 1 1 3.496 0C7.746 3.5 6.15 4.5 6.15 4.5z"></svg:path>`,
})
export class GuidanceBinThrowPersonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
