import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCityHallIcon],svg[streamline-city-hall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.707 13.438h12.75M3.86 5.687l3.222-2.53l3.222 2.53M4.35 7.813h5.464v5.625H4.35V7.811ZM3.238 5.688h7.688v2.121H3.238zM1.618 7.81v5.628M12.546 7.81v5.625M.707 7.81h12.75M7.082 3.156V.674m0 0h1.25"></svg:path><svg:path d="M6.095 11.203a.93.93 0 0 1 .931-.93v0a.93.93 0 0 1 .931.93v2.235H6.095z"></svg:path></svg:g>`,
})
export class StreamlineCityHallIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
