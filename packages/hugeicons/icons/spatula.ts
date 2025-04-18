import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSpatulaIcon],svg[hugeicons-spatula-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m16.988 2.38l.76.55a15 15 0 0 1 3.32 3.318l.551.759c.577.793.49 1.888-.204 2.581l-4.53 4.527a2 2 0 0 1-1.813.543l-2.038-.418a2 2 0 0 0-1.813.543L4.648 21.35c-.392.41-1.273 1.132-2.225.18c-.864-.862-.203-1.804.207-2.196l6.574-6.566a2 2 0 0 0 .543-1.811L9.33 8.92a2 2 0 0 1 .544-1.81l4.531-4.527a2 2 0 0 1 2.584-.204m-1.769 8.307l2.155-2.154m-4 .309l2.154-2.154" color="currentColor"></svg:path>`,
})
export class HugeiconsSpatulaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
