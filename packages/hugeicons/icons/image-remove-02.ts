import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsImageRemove02Icon],svg[hugeicons-image-remove-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11.5 2.5c-4.478 0-6.718 0-8.109 1.391S2 7.521 2 12c0 4.478 0 6.718 1.391 8.109S7.021 21.5 11.5 21.5c4.478 0 6.718 0 8.109-1.391S21 16.479 21 12v-.95"></svg:path><svg:path d="M2 13.635q.93-.135 1.872-.132c2.652-.056 5.239.77 7.3 2.331c1.91 1.448 3.253 3.44 3.828 5.666"></svg:path><svg:path d="M21 16.396c-1.175-.595-2.391-.897-3.614-.896c-1.851-.007-3.684.673-5.386 2m10-12h-8"></svg:path></svg:g>`,
})
export class HugeiconsImageRemove02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
