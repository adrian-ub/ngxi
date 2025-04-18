import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsComet01Icon],svg[hugeicons-comet-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M4.05 10.05a7 7 0 0 0 9.9 9.9L17.899 16M12.1 2L6.5 7.6M22 11.9l-2 2"></svg:path><svg:path d="M11.121 12.879A3 3 0 1 1 6.88 17.12a3 3 0 0 1 4.242-4.242m-4.243.002L14 5.758M17.758 2L16 3.758m6 2.485l-6.636 6.637"></svg:path></svg:g>`,
})
export class HugeiconsComet01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
