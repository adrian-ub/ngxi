import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAdobeIcon],svg[mdi-adobe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M14.58 3H22v16.67L14.58 3M9.42 3H2v16.67L9.42 3M12 9.17l4.67 10.5H13.5l-1.33-3.34H8.75L12 9.17z" fill="currentColor"></svg:path>`,
})
export class MdiAdobeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
