import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamNewsletterIcon],svg[jam-newsletter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 0h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m0 2v10h16V2zm3 6h6a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2m10-5h2v2h-2z"></svg:path>`,
})
export class JamNewsletterIcon {
  readonly viewBox = input("-2 -5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
