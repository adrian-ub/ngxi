import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGoogleFiberIcon],svg[arcticons-google-fiber-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23 5.5C23 15.165 15.165 23 5.5 23V5.5zm19.5 0C42.5 15.165 34.665 23 25 23V5.5zm0 19.5c0 9.665-7.835 17.5-17.5 17.5V25zM23 25c0 9.665-7.835 17.5-17.5 17.5V25z"></svg:path>`,
})
export class ArcticonsGoogleFiberIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
