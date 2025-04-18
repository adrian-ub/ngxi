import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsQuran03Icon],svg[hugeicons-quran-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20.5 17H6a2.5 2.5 0 0 0 0 5h14.5"></svg:path><svg:path d="M20.5 22a2.5 2.5 0 0 1 0-5m-5.566-6A3.23 3.23 0 1 1 10.5 6.566M13.5 8h.009"></svg:path><svg:path d="M3.5 19.5v-14A3.5 3.5 0 0 1 7 2h10a3.5 3.5 0 0 1 3.5 3.5V17"></svg:path></svg:g>`,
})
export class HugeiconsQuran03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
