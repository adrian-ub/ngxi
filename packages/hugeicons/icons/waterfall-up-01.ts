import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWaterfallUp01Icon],svg[hugeicons-waterfall-up-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 17v-3m4 0V9m4 0V6m4 4V4M3 3v11c0 3.3 0 4.95 1.025 5.975S6.7 21 10 21h11" color="currentColor"></svg:path>`,
})
export class HugeiconsWaterfallUp01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
