import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsImageAdd02Icon],svg[hugeicons-image-add-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path fill="currentColor" d="M22 6.75a.75.75 0 0 0 0-1.5zm-8-1.5a.75.75 0 0 0 0 1.5zM18.75 2a.75.75 0 0 0-1.5 0zm-1.5 8a.75.75 0 0 0 1.5 0zM22 5.25h-4v1.5h4zm-4 0h-4v1.5h4zM17.25 2v4h1.5V2zm0 4v4h1.5V6z"></svg:path><svg:path stroke="currentColor" d="M11.5 3C7.022 3 4.782 3 3.391 4.391S2 8.021 2 12.5c0 4.478 0 6.718 1.391 8.109S7.021 22 11.5 22c4.478 0 6.718 0 8.109-1.391S21 16.979 21 12.5V12"></svg:path><svg:path stroke="currentColor" d="M2 14.135q.93-.135 1.872-.132c2.652-.056 5.239.77 7.3 2.331c1.91 1.448 3.253 3.44 3.828 5.666"></svg:path><svg:path stroke="currentColor" d="M21 16.896c-1.175-.595-2.391-.897-3.614-.896c-1.851-.007-3.684.673-5.386 2"></svg:path></svg:g>`,
})
export class HugeiconsImageAdd02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
