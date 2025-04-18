import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceLuggageIcon],svg[guidance-luggage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M5.5 4.5v17m13-17v17m-2.027-17H23.5v.25l-.055.31a45.7 45.7 0 0 0 0 15.88l.055.31v.25H.5v-.25l.055-.31a45.7 45.7 0 0 0 0-15.88L.5 4.75V4.5h7.027m8.946 0a4.5 4.5 0 0 0-8.946 0m8.946 0H7.527"></svg:path>`,
})
export class GuidanceLuggageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
