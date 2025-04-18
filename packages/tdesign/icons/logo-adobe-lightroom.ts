import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoAdobeLightroomIcon],svg[tdesign-logo-adobe-lightroom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v16h16v-6.5h-1c-1.015 0-1.99.403-2.707 1.121l-.293.293V18h-2v-7h2v1.331a5.83 5.83 0 0 1 3-.831h1V4zm4 2v10h5v2H6V6z"></svg:path>`,
})
export class TdesignLogoAdobeLightroomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
