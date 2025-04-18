import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsTextCaseTitleIcon],svg[proicons-text-case-title-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m1.88 18l1.83-4.404m0 0h6.59m-6.59 0L6.515 6.85c.193-.465.787-.465.98 0l2.805 6.747m0 0L12.13 18m2.66-11.5V18m7.59-3.795a3.795 3.795 0 1 1-7.59 0a3.795 3.795 0 0 1 7.59 0"></svg:path>`,
})
export class ProiconsTextCaseTitleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
