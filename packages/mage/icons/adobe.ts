import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageAdobeIcon],svg[mage-adobe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.443 3.104L2 20.897V3.104zm2.564 6.566l4.715 11.227h-3.084l-1.398-3.55H8.744zM22 3.104v17.793L14.653 3.104z"></svg:path>`,
})
export class MageAdobeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
