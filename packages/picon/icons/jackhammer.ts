import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconJackhammerIcon],svg[picon-jackhammer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 2V1h8v1M3.5 8L3 7l.5-1V4L2 3V0h4v3L4.5 4v2L5 7l-.5 1"></svg:path>`,
})
export class PiconJackhammerIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
