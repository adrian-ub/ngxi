import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceLuggageConveyorBeltIcon],svg[guidance-luggage-conveyor-belt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M8 3.5v11m8-11v11m-1-11a3 3 0 1 0-6 0M4 21h1m4 0h1m4 0h1m4 0h1m0-6.5H4v-.177l.202-1.345a26.7 26.7 0 0 0 0-7.956L4 3.676V3.5h16v.176l-.203 1.346a26.8 26.8 0 0 0 0 7.956L20 14.323zm1 4H3a2.5 2.5 0 0 0 0 5h18a2.5 2.5 0 0 0 0-5Z"></svg:path>`,
})
export class GuidanceLuggageConveyorBeltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
