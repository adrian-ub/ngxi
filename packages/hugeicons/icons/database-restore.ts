import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDatabaseRestoreIcon],svg[hugeicons-database-restore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:ellipse cx="11" cy="5" rx="8" ry="3"></svg:ellipse><svg:path d="M6 10.842c.602.18 1.274.33 2 .44m-2 6.56c.602.18 1.274.33 2 .44M19.842 13l.57 2.345l-.947-.583a4.04 4.04 0 0 0-2.425-.804c-2.231 0-4.04 1.8-4.04 4.02C13 20.2 14.809 22 17.04 22A4.04 4.04 0 0 0 21 18.783"></svg:path><svg:path d="M19 5v5M3 5v14c0 1.657 3.582 3 8 3q.128 0 .254-.002"></svg:path><svg:path d="M3 12c0 1.616 3.407 2.934 7.675 2.998"></svg:path></svg:g>`,
})
export class HugeiconsDatabaseRestoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
