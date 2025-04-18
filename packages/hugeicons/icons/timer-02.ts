import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTimer02Icon],svg[hugeicons-timer-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 22h11a9 9 0 1 0 0-18c-4.633 0-8.503 3.5-9 8m14.5-6.5l1-1m-14 0l1 1"></svg:path><svg:path d="m16.5 9l-2.94 2.94m0 0a1.5 1.5 0 1 0-2.121 2.121a1.5 1.5 0 0 0 2.122-2.122M12.5 3.5V2m-2 0h4M2 15h3m-3 4h5"></svg:path></svg:g>`,
})
export class HugeiconsTimer02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
