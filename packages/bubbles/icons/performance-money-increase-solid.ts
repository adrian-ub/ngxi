import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesPerformanceMoneyIncreaseSolidIcon],svg[bubbles-performance-money-increase-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.42 6.37a.5.5 0 0 1-.68 0l-2.85-2.23a2.5 2.5 0 0 0-3.33.18l-6.87 6.87a1.49 1.49 0 0 0 0 2.12a1.5 1.5 0 0 0 2.12 0L10 7.08a.5.5 0 0 1 .67 0l2.88 2.31A2.52 2.52 0 0 0 17 9.1l3.46-3.73a.23.23 0 0 1 .18-.08a.22.22 0 0 1 .18.07l1.42 1.42a.74.74 0 0 0 .82.16a.74.74 0 0 0 .46-.69V.75a.76.76 0 0 0-.77-.75h-5.5a.74.74 0 0 0-.69.46a.74.74 0 0 0 .16.82l1.6 1.6a.25.25 0 0 1 0 .35zM21 21h-7a1.5 1.5 0 1 0 0 3h7a1.5 1.5 0 1 0 0-3M3 24h7a1.5 1.5 0 1 0 0-3H3a1.5 1.5 0 1 0 0 3m6-4.5a1.5 1.5 0 1 0 0-3H2a1.5 1.5 0 1 0 0 3zM23.5 18a1.5 1.5 0 0 0-1.5-1.5h-7a1.5 1.5 0 1 0 0 3h7a1.5 1.5 0 0 0 1.5-1.5M14 15h7a1.5 1.5 0 1 0 0-3h-7a1.5 1.5 0 1 0 0 3"></svg:path>`,
})
export class BubblesPerformanceMoneyIncreaseSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
