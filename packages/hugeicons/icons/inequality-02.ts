import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsInequality02Icon],svg[hugeicons-inequality-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 20H3m0-4h14.162c2.38 0 3.571 0 3.803-.627s-.702-1.32-2.57-2.705L6.698 4" color="currentColor"></svg:path>`,
})
export class HugeiconsInequality02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
