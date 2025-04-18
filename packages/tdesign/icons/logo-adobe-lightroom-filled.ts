import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoAdobeLightroomFilledIcon],svg[tdesign-logo-adobe-lightroom-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v20h20zM8 6v10h5v2H6V6zm12 7.5h-1c-1.015 0-1.99.403-2.707 1.121l-.293.293V18h-2v-7h2v1.331a5.83 5.83 0 0 1 3-.831h1z"></svg:path>`,
})
export class TdesignLogoAdobeLightroomFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
