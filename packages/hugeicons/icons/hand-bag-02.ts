import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHandBag02Icon],svg[hugeicons-hand-bag-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19.993 10.5c.847 2.478 3.125 6.958 1.349 9.38c-2.288 3.122-16.836 2.515-18.68 0C.886 17.458 3.153 12.978 4 10.5"></svg:path><svg:path d="M12 15c1.264 0 2.998 2.571 1.28 2.893a7.7 7.7 0 0 1-2.56 0C9.002 17.57 10.736 15 12 15m-4.5 0c-1.778-1.195-2.889-2.908-3.327-4.93c-.187-.858-.28-1.287.022-1.679C4.497 8 4.988 8 5.968 8h12.064c.98 0 1.47 0 1.773.391c.302.392.209.82.022 1.679c-.438 2.022-1.549 3.735-3.327 4.93M12 15V8M6.5 8c.57-4.008 2.816-7 5.5-7s4.93 2.992 5.5 7"></svg:path></svg:g>`,
})
export class HugeiconsHandBag02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
