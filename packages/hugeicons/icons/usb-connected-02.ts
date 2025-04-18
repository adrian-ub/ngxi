import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUsbConnected02Icon],svg[hugeicons-usb-connected-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13.66 21a4 4 0 0 1-1.868.923c-.387.077-.852.077-1.783.077s-1.397 0-1.784-.077a4 4 0 0 1-3.148-3.143C5 18.394 5 17.93 5 17v-5.5c0-1.886 0-2.828.587-3.414S7.118 7.5 9.007 7.5h2.004c1.888 0 2.833 0 3.42.586c.405.404.53.978.569 1.914m-1.5-2.5v-2c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C12.107 2 11.404 2 10 2s-2.107 0-2.611.337a2 2 0 0 0-.552.552C6.5 3.393 6.5 4.096 6.5 5.5v2m3-3h1"></svg:path><svg:path d="M11 16s1 0 2 2c0 0 3.177-5 6-6"></svg:path></svg:g>`,
})
export class HugeiconsUsbConnected02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
