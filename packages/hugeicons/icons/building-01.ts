import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBuilding01Icon],svg[hugeicons-building-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 22h16M17 9h-3m4 4h-4m4 4h-4m-8 5V3.2C6 2.424 6.471 2 7.2 2c1.672 0 2.508 0 3.208.11a9 9 0 0 1 7.481 7.482c.111.7.111 1.536.111 3.208V22" color="currentColor"></svg:path>`,
})
export class HugeiconsBuilding01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
