import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsOktaIcon],svg[simple-icons-okta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0C5.389 0 0 5.35 0 12s5.35 12 12 12s12-5.35 12-12S18.611 0 12 0m0 18c-3.325 0-6-2.675-6-6s2.675-6 6-6s6 2.675 6 6s-2.675 6-6 6"></svg:path>`,
})
export class SimpleIconsOktaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
