import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineJusticeScale2Icon],svg[streamline-justice-scale-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 11L3 4.82L.5 11m5 0a2.5 2.5 0 0 1-5 0m5 0h-5m13-4L11 1.18L8.5 7m5 0a2.5 2.5 0 0 1-5 0m5 0h-5m-7-1.5l11-5M7 3V.5"></svg:path>`,
})
export class StreamlineJusticeScale2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
