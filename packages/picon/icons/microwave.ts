import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconMicrowaveIcon],svg[picon-microwave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1h8v6H7v1H6V7H2v1H1V7H0m1-1h4V2H1m6 0H6v1h1M6 5h1V4H6"></svg:path>`,
})
export class PiconMicrowaveIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
