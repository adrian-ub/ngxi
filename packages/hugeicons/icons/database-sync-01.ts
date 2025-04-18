import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDatabaseSync01Icon],svg[hugeicons-database-sync-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:ellipse cx="10" cy="5" rx="8" ry="3"></svg:ellipse><svg:path d="M5 10.842c.602.18 1.274.33 2 .44m-2 6.56c.602.18 1.274.33 2 .44m5-2.782l1.136 1.465a4 4 0 0 1 7.364-.901m1.5 4.434l-1.136-1.463a4 4 0 0 1-7.328.965"></svg:path><svg:path d="M18 5v6.008M2 5v14.02c0 1.53 3.054 2.794 7 2.98"></svg:path><svg:path d="M2 12c0 1.542 3.054 2.814 7 3"></svg:path></svg:g>`,
})
export class HugeiconsDatabaseSync01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
