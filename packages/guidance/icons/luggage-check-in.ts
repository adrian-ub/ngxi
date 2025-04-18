import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceLuggageCheckInIcon],svg[guidance-luggage-check-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M1 23.5h20.5v-19m0 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm-16 4v11m8-11v11m-1-11a3 3 0 1 0-6 0m11 11h-16v-.177l.202-1.345a26.7 26.7 0 0 0 0-7.956L1.5 8.676V8.5h16v.176l-.203 1.346a26.8 26.8 0 0 0 0 7.956l.203 1.345z"></svg:path>`,
})
export class GuidanceLuggageCheckInIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
