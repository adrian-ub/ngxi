import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamMicFIcon],svg[jam-mic-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12H8a1 1 0 0 0 0 2h3.659a6.02 6.02 0 0 1-3.686 3.668a2 2 0 1 1-3.945 0A6.02 6.02 0 0 1 .34 14H4a1 1 0 0 0 0-2H0v-2h4a1 1 0 1 0 0-2H0V6h4a1 1 0 1 0 0-2H.341A6.002 6.002 0 0 1 11.66 4H8a1 1 0 1 0 0 2h4v2H8a1 1 0 1 0 0 2h4z"></svg:path>`,
})
export class JamMicFIcon {
  readonly viewBox = input("-6 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
