import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconFeederIcon],svg[picon-feeder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3c0-3-6-3-6 0m0 1h6v4H1m5-5Q4-3 2 3"></svg:path>`,
})
export class PiconFeederIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
