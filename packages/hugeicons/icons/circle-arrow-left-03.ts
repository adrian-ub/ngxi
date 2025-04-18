import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCircleArrowLeft03Icon],svg[hugeicons-circle-arrow-left-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path d="M12.503 9.491c-.531.53-2.51 1.823-2.5 2.568c.08.738 2.001 1.916 2.506 2.436M17 11.975l-6.993.008m-3.005 4.019l-.01-7.992"></svg:path></svg:g>`,
})
export class HugeiconsCircleArrowLeft03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
