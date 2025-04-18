import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSavingsIcon],svg[hugeicons-savings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M5 13.5H3a1 1 0 0 0-1 1V21a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-6.5a1 1 0 0 0-1-1m1 1h5.75a1.25 1.25 0 1 1 0 2.5H9.5"></svg:path><svg:path d="M11 17h3.692a4 4 0 0 0 2.363-.773l2.629-1.925a1.44 1.44 0 0 1 1.896.117a1.43 1.43 0 0 1-.088 2.105l-4.397 3.578A4 4 0 0 1 14.57 21H6M19 7A5 5 0 1 1 9 7a5 5 0 0 1 10 0"></svg:path></svg:g>`,
})
export class HugeiconsSavingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
