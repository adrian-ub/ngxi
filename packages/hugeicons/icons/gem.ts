import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsGemIcon],svg[hugeicons-gem-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9.852 21.01l-4.41-2.783c-1.816-1.145-2.723-1.717-2.91-2.658c-.185-.94.43-1.846 1.66-3.657L8.603 5.42C10.152 3.14 10.926 2 12 2s1.848 1.14 3.397 3.42l4.411 6.492c1.23 1.811 1.845 2.716 1.66 3.657c-.187.94-1.094 1.513-2.91 2.658l-4.41 2.783c-1.047.66-1.57.99-2.148.99s-1.101-.33-2.148-.99M12 2l2 12m7 1.569L14 14m-2 8l2-8M3 15.569L14 14" color="currentColor"></svg:path>`,
})
export class HugeiconsGemIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
