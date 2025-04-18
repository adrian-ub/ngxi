import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRouter02Icon],svg[hugeicons-router-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 22H6c-1.886 0-2.828 0-3.414-.586S2 19.886 2 18s0-2.828.586-3.414S4.114 14 6 14h12c1.886 0 2.828 0 3.414.586S22 16.114 22 18s0 2.828-.586 3.414S19.886 22 18 22m-9-8V6m4.991 12H14m-4.004 0h.008M6 18h.009m-2.531-8C2.543 8.851 2 7.48 2 6.005C2 4.527 2.547 3.151 3.487 2M6 3.826a4.1 4.1 0 0 0-.64 2.18a4.1 4.1 0 0 0 .634 2.17m3.002-2.179h.006" color="currentColor"></svg:path>`,
})
export class HugeiconsRouter02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
