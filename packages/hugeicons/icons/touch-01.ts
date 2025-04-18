import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTouch01Icon],svg[hugeicons-touch-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.893 21.988c-.052-1.913.077-2.143.214-2.569s1.093-1.96 1.431-3.057c1.095-3.548.075-4.303-1.285-5.309c-1.509-1.115-4.354-1.68-5.765-1.558V3.744a1.744 1.744 0 0 0-3.489 0v10.26l-2.06-2.18c-.64-.694-1.668-.764-2.37-.133a1.72 1.72 0 0 0-.222 2.318l1.292 1.713M8.869 22l-.019-1.05c.043-1.232-.853-2.035-2.021-3.641l-.246-.336m0 0a72 72 0 0 0-.944-1.251m.944 1.25l1.17 1.55m-1.17-1.55l-.944-1.25m0 0c-.572-.742-1.003-1.281-1.375-1.816" color="currentColor"></svg:path>`,
})
export class HugeiconsTouch01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
