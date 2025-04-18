import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDatabaseIcon],svg[hugeicons-database-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:ellipse cx="12" cy="5" rx="8" ry="3"></svg:ellipse><svg:path d="M7 10.842c.602.18 1.274.33 2 .44M20 12c0 1.657-3.582 3-8 3s-8-1.343-8-3m3 5.842c.602.18 1.274.33 2 .44"></svg:path><svg:path d="M20 5v14c0 1.657-3.582 3-8 3s-8-1.343-8-3V5"></svg:path></svg:g>`,
})
export class HugeiconsDatabaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
