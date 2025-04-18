import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineIceCream2Icon],svg[streamline-ice-cream-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10 .5H4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1M5.5 3v3.5m3-3.5v3.5m0 3V12a1.5 1.5 0 0 1-3 0V9.5"></svg:path>`,
})
export class StreamlineIceCream2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
