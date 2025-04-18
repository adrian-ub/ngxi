import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWattpadIcon],svg[hugeicons-wattpad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.2 6.24c1.6.792 1.334 2.968 1 3.957c2.05-4.169 7.851-8.66 7.851-1.175c.502-.84 2.008-2.722 4.016-3.522c2.51-1 4.39 1 1.396 4c0 0-1.497 1.5-2.994 4.5s-5.489 6-6.768-.836c-3.501 8.903-7.502 6.43-8.502.495s2-8.408 4-7.419" color="currentColor"></svg:path>`,
})
export class HugeiconsWattpadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
