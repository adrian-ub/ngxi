import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsImageDownload02Icon],svg[hugeicons-image-download-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17 7.5c.491.506 1.8 2.5 2.5 2.5M22 7.5c-.491.506-1.8 2.5-2.5 2.5m0 0V2"></svg:path><svg:path d="M21 13c-.002 4.147-.053 6.27-1.391 7.609C18.217 22 15.979 22 11.5 22c-4.478 0-6.718 0-8.109-1.391S2 16.979 2 12.5c0-4.478 0-6.718 1.391-8.109S7.021 3 11.5 3H14"></svg:path><svg:path d="M2 14.135q.93-.135 1.872-.132c2.652-.056 5.239.77 7.3 2.331c1.91 1.448 3.253 3.44 3.828 5.666"></svg:path><svg:path d="M21 16.896c-1.175-.595-2.391-.897-3.614-.896c-1.851-.007-3.684.673-5.386 2"></svg:path></svg:g>`,
})
export class HugeiconsImageDownload02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
