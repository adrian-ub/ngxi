import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFinsIcon],svg[hugeicons-fins-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.471 19.963c2.414-4.127 3.02-12.61 2.156-16.268L9 4.5S7.77 3 6.5 3S4 4.5 4 4.5l-1.627-.805c-.864 3.658-.258 12.14 2.156 16.268c.809 1.383 3.134 1.383 3.942 0m7.058-15.926c-2.414 4.127-3.02 12.61-2.156 16.268L15 19.5s1.23 1.5 2.5 1.5s2.5-1.5 2.5-1.5l1.627.805c.864-3.657.258-12.14-2.156-16.268c-.809-1.382-3.134-1.383-3.942 0M6.5 17v-1m11-8V7" color="currentColor"></svg:path>`,
})
export class HugeiconsFinsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
