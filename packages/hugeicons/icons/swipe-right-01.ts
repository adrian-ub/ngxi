import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSwipeRight01Icon],svg[hugeicons-swipe-right-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 4.5h-6m6 0c0-.7-1.994-2.009-2.5-2.5M21 4.5c0 .699-1.994 2.007-2.5 2.498m-1.606 14.99c-.052-1.913.077-2.143.214-2.569c.136-.425 1.093-1.96 1.431-3.057c1.095-3.548.074-4.302-1.286-5.309c-1.508-1.115-4.354-1.68-5.765-1.558V3.744a1.744 1.744 0 0 0-3.488 0v10.26l-2.06-2.18c-.64-.694-1.668-.764-2.37-.133a1.72 1.72 0 0 0-.223 2.318l1.292 1.713M7.87 22l-.02-1.05c.044-1.232-.852-2.035-2.02-3.641l-.247-.336m0 0c-.354-.48-.665-.89-.944-1.251m.944 1.251l1.17 1.55m-1.17-1.55l-.944-1.251m0 0c-.571-.742-1.002-1.28-1.374-1.816" color="currentColor"></svg:path>`,
})
export class HugeiconsSwipeRight01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
