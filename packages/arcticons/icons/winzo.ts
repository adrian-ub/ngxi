import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWinzoIcon],svg[arcticons-winzo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.262 18.291L29 24.461l-7.941 4.467m21.235-4.93c-1.513 10.104-10.93 18.296-21.032 18.298h-.002c-10.103 0-17.066-8.19-15.552-18.294V24C7.221 13.896 16.638 5.705 26.741 5.705c10.103-.001 17.066 8.19 15.552 18.293z"></svg:path>`,
})
export class ArcticonsWinzoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
