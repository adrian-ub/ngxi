import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCalendarIcon],svg[picon-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3v4h6V3M0 8V1h2V0h1v1h2V0h1v1h2v7"></svg:path>`,
})
export class PiconCalendarIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
