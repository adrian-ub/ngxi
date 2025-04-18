import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDataSetIcon],svg[carbon-data-set-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 12V3h-2v2h-3v2h3v5h-3v2h8v-2zM8.5 5C10.43 5 12 6.57 12 8.5S10.43 12 8.5 12S5 10.43 5 8.5S6.57 5 8.5 5m0-2a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11m0 17c1.93 0 3.5 1.57 3.5 3.5S10.43 27 8.5 27S5 25.43 5 23.5S6.57 20 8.5 20m0-2a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11m15 2c1.93 0 3.5 1.57 3.5 3.5S25.43 27 23.5 27S20 25.43 20 23.5s1.57-3.5 3.5-3.5m0-2a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11"></svg:path>`,
})
export class CarbonDataSetIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
