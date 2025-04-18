import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWidgetsIcon],svg[arcticons-widgets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.636 32.08h-.061a8.075 8.075 0 0 1-.095-16.15m25.053-.01a8.075 8.075 0 0 1 7.967 8.074h0c0 4.385-3.5 7.969-7.883 8.073M11.419 15.933h25m-24.917 16.14h25"></svg:path><svg:circle cx="13.148" cy="24.093" r="4.901"></svg:circle><svg:path d="m11.96 22.067l3.593 2.11l-3.623 2.091v-4.214m11.782-.134h15.652m-15.658 4.908h10.965"></svg:path></svg:g>`,
})
export class ArcticonsWidgetsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
