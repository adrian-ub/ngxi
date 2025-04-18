import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineWifiIcon],svg[streamline-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 12.25a1.31 1.31 0 1 0 0-2.62a1.31 1.31 0 0 0 0 2.62M4.53 8a3.49 3.49 0 0 1 5 0M2.36 6.31a6.55 6.55 0 0 1 9.29 0"></svg:path><svg:path d="M.5 4.45a9.19 9.19 0 0 1 13 0"></svg:path></svg:g>`,
})
export class StreamlineWifiIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
