import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsContactMultipleIcon],svg[pixelarticons-contact-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3h20v14H4zm18 12V5H6v10zm-2 4H2V7H0v14h20zM9 7h2v2H9zm3 4H8v2h4zm2-4h6v2h-6zm6 4h-6v2h6z"></svg:path>`,
})
export class PixelarticonsContactMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
