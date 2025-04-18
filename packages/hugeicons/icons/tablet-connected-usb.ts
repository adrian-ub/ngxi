import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTabletConnectedUsbIcon],svg[hugeicons-tablet-connected-usb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 18c-.199.69-.5 1.232-.96 1.682C19.698 21 17.536 21 13.212 21h-2.038c-4.324 0-6.486 0-7.83-1.318S2 16.242 2 12s0-6.364 1.343-7.682C4.687 3 6.85 3 11.173 3h2.038c4.324 0 6.486 0 7.83 1.318c.458.45.76.993.959 1.682M6.5 3.5v17"></svg:path><svg:path d="M19.623 12.002a1.188 1.188 0 1 0 2.377 0a1.188 1.188 0 0 0-2.377 0m0 0l-9.598.004m2.36-3.485l1.122.043a1 1 0 0 1 .898.65l1.032 2.79m-1.243 3.488l1.122-.043a1 1 0 0 0 .898-.65l1.017-2.796"></svg:path></svg:g>`,
})
export class HugeiconsTabletConnectedUsbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
