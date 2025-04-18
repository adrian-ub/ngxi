import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsActivity04Icon],svg[hugeicons-activity-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21.5 4.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-1.029 4.906c.029.884.029 1.906.029 3.094c0 4.243 0 6.364-1.318 7.682S15.742 21.5 11.5 21.5s-6.364 0-7.682-1.318S2.5 16.742 2.5 12.5s0-6.364 1.318-7.682S7.258 3.5 11.5 3.5c1.188 0 2.21 0 3.094.029"></svg:path><svg:path d="M5.5 12.5H8l2-4l3 8l2-4h2.5"></svg:path></svg:g>`,
})
export class HugeiconsActivity04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
