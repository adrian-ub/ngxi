import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedSbtcIcon],svg[token-branded-sbtc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#F08619" d="M12 16.5a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9"></svg:path><svg:path fill="#fff" d="M9.75 14.25v-4.5h3.26c.793 0 1.24.748 1.24 1.346c0 .479-.207.782-.31.873c.248.25.31.702.31.897c.02.858-.707 1.384-1.104 1.384z"></svg:path><svg:path fill="#4E4294" d="M12 21a9 9 0 0 0 7.796-13.5h-4.42a5.61 5.61 0 0 1 2.249 4.499a5.624 5.624 0 0 1-5.616 5.624l.004.002h-7.04A8.98 8.98 0 0 0 12 21m-7.796-4.5A8.96 8.96 0 0 1 3 12a9 9 0 0 1 16.026-5.625H12A5.624 5.624 0 0 0 8.627 16.5z"></svg:path><svg:path fill="#F08619" d="M12.972 10.875h-2.097v.562h2.097c.05-.016.153-.093.153-.271s-.102-.269-.153-.291m0 1.688h-2.097v.562h2.097c.05-.016.153-.093.153-.272c0-.178-.102-.268-.153-.29"></svg:path></svg:g>`,
})
export class TokenBrandedSbtcIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
