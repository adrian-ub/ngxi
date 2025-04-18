import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCandleFillIcon],svg[ri-candle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.172 9.331a4 4 0 0 1 0-5.656L12 .846l2.828 2.829A4 4 0 0 1 13 10.377V12h5a1 1 0 0 1 1 1v7h2v2H3v-2h2v-7a1 1 0 0 1 1-1h5v-1.623A4 4 0 0 1 9.172 9.33m1.414-4.242a2 2 0 1 0 2.828 0L12 3.675z"></svg:path>`,
})
export class RiCandleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
