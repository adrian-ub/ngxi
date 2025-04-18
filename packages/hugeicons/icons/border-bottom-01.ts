import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBorderBottom01Icon],svg[hugeicons-border-bottom-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.5 17.5c.199 1.094.55 1.899 1.17 2.535C5.1 21.5 7.4 21.5 12 21.5s6.9 0 8.33-1.465c.62-.636.972-1.441 1.17-2.535M2.751 6.31c.194-1.042.536-1.809 1.14-2.415c.605-.606 1.37-.95 2.409-1.143M2.505 14c-.005-.586-.005-1.288-.005-1.974s0-1.45.005-2.037M10.1 2.505q.875-.006 1.9-.005q1.025-.001 1.9.005m3.8.247c1.04.194 1.804.537 2.409 1.143s.946 1.373 1.14 2.415m.246 7.69c.005-.586.005-1.288.005-1.974s0-1.45-.005-2.037M2.5 12H4m16 0h1.5M12 15V9m0-4.531V3m-3 9h6" color="currentColor"></svg:path>`,
})
export class HugeiconsBorderBottom01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
