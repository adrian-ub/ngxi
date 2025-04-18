import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingBag02Icon],svg[hugeicons-shopping-bag-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m3.062 15.193l.365-2.071c.432-2.448.647-3.672 1.502-4.397S7.012 8 9.467 8h5.066c2.455 0 3.683 0 4.538.725s1.07 1.949 1.502 4.397l.365 2.071c.598 3.388.896 5.082-.023 6.195c-.92 1.112-2.62 1.112-6.017 1.112H9.102c-3.398 0-5.097 0-6.017-1.113s-.62-2.806-.023-6.194M7.5 8l.168-2.014a4.347 4.347 0 0 1 8.664 0L16.5 8"></svg:path><svg:path d="M15 11c-.13 1.413-1.434 2.5-3 2.5S9.13 12.413 9 11"></svg:path></svg:g>`,
})
export class HugeiconsShoppingBag02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
