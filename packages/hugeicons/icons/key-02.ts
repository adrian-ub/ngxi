import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsKey02Icon],svg[hugeicons-key-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13.5 13.5c1.624.696 2.437 1.044 3.256.935q.139-.018.274-.05c.806-.185 1.444-.796 2.721-2.017l.15-.144c.969-.968 1.453-1.452 1.57-2.44c.118-.989-.134-1.402-.64-2.228a13.2 13.2 0 0 0-1.945-2.442a13.2 13.2 0 0 0-2.442-1.946c-.826-.505-1.24-.757-2.228-.64c-.988.118-1.472.602-2.44 1.57l-.144.15C10.411 5.526 9.8 6.164 9.615 6.97q-.032.137-.05.275c-.11.82.239 1.631.935 3.256"></svg:path><svg:path d="m10.5 10.499l-8 8v3h3v-2h2v-2h2l4-4M17 7l-1 1"></svg:path></svg:g>`,
})
export class HugeiconsKey02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
