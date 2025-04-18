import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesPhoneOutlineIcon],svg[bubbles-phone-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15.04 22.39l.012.007a5.53 5.53 0 0 0 6.884-.755l.774-.774a1.846 1.846 0 0 0 0-2.609L19.449 15a1.846 1.846 0 0 0-2.609 0v0a1.843 1.843 0 0 1-2.608 0L9.014 9.781a1.846 1.846 0 0 1 0-2.609v0a1.843 1.843 0 0 0 0-2.608L5.754 1.3a1.846 1.846 0 0 0-2.609 0l-.774.774a5.535 5.535 0 0 0-.756 6.884l.008.012A49.9 49.9 0 0 0 15.04 22.39"></svg:path>`,
})
export class BubblesPhoneOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
