import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsAdobeIcon],svg[simple-icons-adobe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.966 22.624l-1.69-4.281H8.122l3.892-9.144l5.662 13.425zM8.884 1.376H0v21.248zm15.116 0h-8.884L24 22.624Z"></svg:path>`,
})
export class SimpleIconsAdobeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
