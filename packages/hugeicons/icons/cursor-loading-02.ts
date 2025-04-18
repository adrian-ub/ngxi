import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCursorLoading02Icon],svg[hugeicons-cursor-loading-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.38 2.466C4.216.49 18.012 5.329 18 7.096c-.013 2.003-5.388 2.62-6.878 3.037c-.896.251-1.135.51-1.342 1.449c-.936 4.254-1.405 6.37-2.476 6.418C5.598 18.075.591 4.393 2.381 2.466M20.776 13h-4.552c-.637 0-1.197.443-1.223 1.082c-.032.803.518 1.336 1.095 1.837h0c.798.693 1.197 1.04 1.239 1.478q.009.104 0 .206c-.042.439-.441.785-1.24 1.478c-.592.514-1.127.993-1.093 1.837c.025.639.585 1.082 1.222 1.082h4.552c.637 0 1.197-.443 1.223-1.082a1.73 1.73 0 0 0-.552-1.366c-.178-.16-.362-.314-.543-.471h0c-.798-.693-1.197-1.04-1.239-1.478a1 1 0 0 1 0-.206c.042-.439.441-.785 1.24-1.478c.586-.509 1.127-1.003 1.093-1.837c-.025-.639-.585-1.082-1.222-1.082" color="currentColor"></svg:path>`,
})
export class HugeiconsCursorLoading02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
