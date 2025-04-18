import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsAdobeIcon],svg[meteor-icons-adobe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 18a2 2 0 0 0 1.7 3h9.7l-2.7-4.5h-2L12 11l6 10h2.3a2 2 0 0 0 1.7-3L13.8 4a2 2 0 0 0-3.6 0Z"></svg:path>`,
})
export class MeteorIconsAdobeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
