import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonLogoAngularIcon],svg[carbon-logo-angular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 16h4.9L16 10.8z"></svg:path><svg:path fill="currentColor" d="M16 3L3 7.6l2.7 15.8L16 29l10.3-5.6L29 7.6zm5.1 18.6l-1.5-3.2h-7.1L11 21.6H8.6L16 5.3l7.4 16.2h-2.3z"></svg:path>`,
})
export class CarbonLogoAngularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
