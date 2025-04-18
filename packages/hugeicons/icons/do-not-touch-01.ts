import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDoNotTouch01Icon],svg[hugeicons-do-not-touch-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.5 22v-1.164c0-.923.499-1.65 1-2.336M8 22c0-1.117-.374-2.473-1.063-3.353l-3.6-4.598a1.696 1.696 0 0 1 .033-2.072a1.683 1.683 0 0 1 2.51-.14l1.62 1.626V7.5m6.002-2a1.5 1.5 0 1 1 3 0v2m-3-2v-2a1.5 1.5 0 0 0-3 0V5m3 .5v4m-3-4.5a1.5 1.5 0 0 0-1.5-1.5C8.174 3.5 8 4 8 4m2.502 1v1.5m6 5.5V7.5m0 0a1.5 1.5 0 1 1 3 0v6.167c0 .714 0 1.323-.012 1.833M2 2l20 20" color="currentColor"></svg:path>`,
})
export class HugeiconsDoNotTouch01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
