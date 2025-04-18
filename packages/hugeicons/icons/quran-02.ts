import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsQuran02Icon],svg[hugeicons-quran-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21 17H6.5a2.5 2.5 0 0 0 0 5H21"></svg:path><svg:path d="M21 22a2.5 2.5 0 0 1 0-5M13.672 6.672L12.5 5.5l-1.172 1.172H9.672v1.656L8.5 9.5l1.172 1.172v1.656h1.656L12.5 13.5l1.172-1.172h1.656v-1.656L16.5 9.5l-1.172-1.172V6.672z"></svg:path><svg:path d="M4 19.5v-14A3.5 3.5 0 0 1 7.5 2h10A3.5 3.5 0 0 1 21 5.5V17"></svg:path></svg:g>`,
})
export class HugeiconsQuran02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
