import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconSnookerIcon],svg[picon-snooker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 4c0-5 8-5 8 0S0 9 0 4m5-3H2v5h3M4 5L3 2h1L3 5"></svg:path>`,
})
export class PiconSnookerIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
