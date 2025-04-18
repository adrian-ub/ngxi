import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCircleArrowUp03Icon],svg[hugeicons-circle-arrow-up-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path d="M14.515 12.504c-.53-.531-1.824-2.509-2.57-2.498c-.737.08-1.914 2.003-2.434 2.508m2.524 4.49l-.014-6.993M8 7.01l7.992-.016"></svg:path></svg:g>`,
})
export class HugeiconsCircleArrowUp03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
