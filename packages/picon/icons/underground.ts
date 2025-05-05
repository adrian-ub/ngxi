import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconUndergroundIcon],svg[picon-underground-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v1h1V5M2 5v1h1V5M2 2v2h4V2M2 7L1 6V2l1-1h4l1 1v4L6 7M0 8h8V3c0-4-8-4-8 0"></svg:path>`,
})
export class PiconUndergroundIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
