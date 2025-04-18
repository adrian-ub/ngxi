import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUsbMemory02Icon],svg[hugeicons-usb-memory-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 11.5c0-1.886 0-2.828.586-3.414S9.114 7.5 11 7.5h2c1.886 0 2.828 0 3.414.586S17 9.614 17 11.5V17c0 .93 0 1.394-.077 1.78a4 4 0 0 1-3.143 3.143C13.394 22 12.93 22 12 22s-1.394 0-1.78-.077a4 4 0 0 1-3.143-3.143C7 18.394 7 17.93 7 17zm8.5-4v-2c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C14.107 2 13.404 2 12 2s-2.107 0-2.611.337a2 2 0 0 0-.552.552C8.5 3.393 8.5 4.096 8.5 5.5v2m3-3h1" color="currentColor"></svg:path>`,
})
export class HugeiconsUsbMemory02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
