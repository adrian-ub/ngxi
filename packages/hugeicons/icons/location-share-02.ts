import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLocationShare02Icon],svg[hugeicons-location-share-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21.168 7a10.03 10.03 0 0 1 0 8M2.832 15a10.03 10.03 0 0 1 0-8M15 11a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path><svg:path d="M12 3.5c4.059 0 7.5 3.428 7.5 7.587c0 4.225-3.497 7.19-6.727 9.206a1.55 1.55 0 0 1-1.546 0C8.003 18.257 4.5 15.327 4.5 11.087C4.5 6.928 7.941 3.5 12 3.5"></svg:path></svg:g>`,
})
export class HugeiconsLocationShare02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
