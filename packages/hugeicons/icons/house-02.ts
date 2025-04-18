import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHouse02Icon],svg[hugeicons-house-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 10h6.13a.94.94 0 0 0 .65-.27l2.57-2.46a.92.92 0 0 1 1.3 0l2.57 2.46a.94.94 0 0 0 .65.27H22"></svg:path><svg:path d="m3 10l1.961-4.576C5.823 3.414 6.451 3 8.638 3h6.724c2.188 0 2.815.414 3.677 2.424L21 10M3 10v11m18-11v11M2 21h20m-9.992-10h-.009M9.5 21v-4.5A1.5 1.5 0 0 1 11 15h2a1.5 1.5 0 0 1 1.5 1.5V21M6 14h1m10 0h1"></svg:path></svg:g>`,
})
export class HugeiconsHouse02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
