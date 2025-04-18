import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSwipeLeft02Icon],svg[hugeicons-swipe-left-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 4.501h6m-6 0c0-.7 1.994-2.008 2.5-2.5m-2.5 2.5c0 .7 1.994 2.009 2.5 2.5m-2.109 14.997c-.052-1.915.077-2.145.214-2.57c.137-.427 1.093-1.962 1.432-3.059c1.094-3.55.074-4.304-1.286-5.31c-1.509-1.117-4.354-1.682-5.765-1.56V3.746a1.744 1.744 0 1 0-3.489 0v6.22m0 12.032v-1.013c-.064-.944-1.002-2.062-2.17-3.669c-1.202-1.74-1.46-2.62-1.271-3.432c.097-.415.35-1.101 1.59-2.274l1.851-1.644m0 4.066V9.966" color="currentColor"></svg:path>`,
})
export class HugeiconsSwipeLeft02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
