import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBread03Icon],svg[hugeicons-bread-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15 11c0-2.761-1.899-5-4.241-5C9.126 6 7.5 7 7 8"></svg:path><svg:path d="M19 11c0-2.21-1.518-4-3.391-4A3 3 0 0 0 14 7.478M22 12c0 3.314-4.477 6-10 6S2 15.314 2 12"></svg:path><svg:path d="M8.89 11C8.5 9.275 7.13 8 5.5 8C3.567 8 2 9.79 2 12c0 1.657 4.477 3 10 3s10-1.343 10-3c0-.995-1.55-2.978-3.469-3"></svg:path></svg:g>`,
})
export class HugeiconsBread03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
