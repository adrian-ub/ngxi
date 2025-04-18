import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMathIcon],svg[hugeicons-math-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path><svg:path d="m5.5 12.5l.475-.316c.473-.316.71-.474.938-.404c.227.071.333.335.545.864L9 16.5l2.088-6.265c.44-1.32.66-1.98 1.184-2.357s1.22-.378 2.611-.378H18.5M17 12l-1.5 1.5m0 0L14 15m1.5-1.5L17 15m-1.5-1.5L14 12"></svg:path></svg:g>`,
})
export class HugeiconsMathIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
