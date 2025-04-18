import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedAutonomysIcon],svg[token-branded-autonomys-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="m14.268 3l6.393 11.35A9.3 9.3 0 0 0 21 11.853c0-4.254-2.86-7.83-6.732-8.853"></svg:path><svg:path d="m14.268 3l6.393 11.35A9.3 9.3 0 0 0 21 11.853c0-4.254-2.86-7.83-6.732-8.853M12 21c2.536 0 4.825-1.067 6.462-2.78H5.538A8.9 8.9 0 0 0 12 21"></svg:path><svg:path d="M12 21c2.536 0 4.825-1.067 6.462-2.78H5.538A8.9 8.9 0 0 0 12 21m-9-9.146c0 .866.12 1.704.34 2.498L9.732 3C5.86 4.022 3 7.599 3 11.854"></svg:path><svg:path d="M3 11.854c0 .866.12 1.704.34 2.498L9.732 3C5.86 4.022 3 7.599 3 11.854m13.277 2.482L12 6.742l-4.276 7.594z"></svg:path><svg:path d="M16.277 14.336L12 6.742l-4.276 7.594z"></svg:path>`,
})
export class TokenBrandedAutonomysIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
