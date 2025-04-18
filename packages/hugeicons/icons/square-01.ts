import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSquare01Icon],svg[hugeicons-square-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.716 7.025c1.99-.105 3.24.052 4.02 1.886c.82 2.2 2.85 8.33 3.358 9.744c.547 1.519 1.25 2.567 4.138 2.305"></svg:path><svg:path d="M15 7.007c-2.863-.025-5.205 4.715-6.507 6.985c-1.43 2.62-3.89 7.16-6.493 6.985M22 9h-4l3.2-2.4A2 2 0 1 0 18 5"></svg:path></svg:g>`,
})
export class HugeiconsSquare01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
