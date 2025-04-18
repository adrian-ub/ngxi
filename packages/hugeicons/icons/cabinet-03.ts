import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCabinet03Icon],svg[hugeicons-cabinet-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M5.5 18v3m13-3v3M21 3H3v10c0 2.357 0 3.535.824 4.268S5.974 18 8.625 18h6.75c2.652 0 3.977 0 4.801-.732C21 16.535 21 15.357 21 13zM2 3h20M3 10.5h18"></svg:path><svg:path d="m10 13.5l.155.078c.42.21.631.315.858.369s.461.053.931.053h.112c.47 0 .705 0 .931-.053c.227-.054.437-.16.858-.37L14 13.5m-4-7l.155.078c.42.21.631.315.858.369s.461.053.931.053h.112c.47 0 .705 0 .931-.053c.227-.054.437-.16.858-.37L14 6.5"></svg:path></svg:g>`,
})
export class HugeiconsCabinet03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
