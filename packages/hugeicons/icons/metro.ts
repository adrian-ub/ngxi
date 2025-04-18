import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMetroIcon],svg[hugeicons-metro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m6 19l-2 2m14-2l2 2M9 15h.009m5.982 0H15M5 9c4 4 10.5 4 14 0"></svg:path><svg:path d="M5.273 7.894C6.094 3.716 7.23 3 11.455 3h1.09c4.225 0 5.36.716 6.182 4.894l.553 2.816c.755 3.84 1.132 5.76.032 7.025S16.142 19 12 19c-4.141 0-6.212 0-7.312-1.265s-.723-3.185.032-7.025z"></svg:path></svg:g>`,
})
export class HugeiconsMetroIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
