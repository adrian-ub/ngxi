import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsChair04Icon],svg[hugeicons-chair-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 13.5L6 22m10-8.5l2 8.5m.5-9c-1.732.622-4.008 1-6.5 1s-4.768-.378-6.5-1M19 2c-1.866.622-4.316 1-7 1s-5.134-.378-7-1m7 12V3M8 13.5L7 3m9 10.5L17 3M7 18h10" color="currentColor"></svg:path>`,
})
export class HugeiconsChair04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
