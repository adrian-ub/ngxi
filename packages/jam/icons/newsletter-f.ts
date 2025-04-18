import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamNewsletterFIcon],svg[jam-newsletter-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 .565h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2m3 8a1 1 0 1 0 0 2h6a1 1 0 0 0 0-2zm10-5v2h2v-2z"></svg:path>`,
})
export class JamNewsletterFIcon {
  readonly viewBox = input("-2 -4.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
