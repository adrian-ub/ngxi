import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaSpeakerOutlineIcon],svg[eva-speaker-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 11a3 3 0 1 0-3-3a3 3 0 0 0 3 3m0-4a1 1 0 1 1-1 1a1 1 0 0 1 1-1m0 5a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 12 12m0 5a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 12 17"></svg:path><svg:path fill="currentColor" d="M17 2H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m1 17a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1Z"></svg:path>`,
})
export class EvaSpeakerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
