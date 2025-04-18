import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMouseWireless1Icon],svg[streamline-mouse-wireless-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 8.5v-1m3.5-6.261a9 9 0 0 0-7 0m5.7 2.099a6.78 6.78 0 0 0-4.36 0M4 10.5v-2a3 3 0 0 1 6 0v2a3 3 0 1 1-6 0"></svg:path>`,
})
export class StreamlineMouseWireless1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
