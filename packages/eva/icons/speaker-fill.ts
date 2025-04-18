import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaSpeakerFillIcon],svg[eva-speaker-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="15.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="12" cy="8" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M17 2H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m-5 3a3 3 0 1 1-3 3a3 3 0 0 1 3-3m0 14a3.5 3.5 0 1 1 3.5-3.5A3.5 3.5 0 0 1 12 19"></svg:path>`,
})
export class EvaSpeakerFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
