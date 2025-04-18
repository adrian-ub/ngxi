import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsToilet01Icon],svg[hugeicons-toilet-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M8 11h9.135c1.465 0 2.198 0 2.64.735c.442.736.182 1.204-.34 2.142A6.1 6.1 0 0 1 14.09 17a6.12 6.12 0 0 1-4.028-1.5M8 11V4c0-.943 0-1.414-.293-1.707S6.943 2 6 2s-1.414 0-1.707.293S4 3.057 4 4v7c0 .943 0 1.414.293 1.707S5.057 13 6 13s1.414 0 1.707-.293S8 11.943 8 11M7 7h3"></svg:path><svg:path d="M16 17c-1 1 0 4 2 5H4c1-1 2.7-4.2 1.5-9"></svg:path></svg:g>`,
})
export class HugeiconsToilet01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
