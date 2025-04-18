import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineJusticeScale1Icon],svg[streamline-justice-scale-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 9.5L3 4L.5 9.5m5 0a2.5 2.5 0 0 1-5 0m5 0h-5m13 0L11 4L8.5 9.5m5 0a2.5 2.5 0 0 1-5 0m5 0h-5M1.5 4h11M7 4V2"></svg:path>`,
})
export class StreamlineJusticeScale1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
