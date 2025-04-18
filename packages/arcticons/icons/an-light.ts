import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAnLightIcon],svg[arcticons-an-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.8 24.3v.7c0 7.6-6.2 13.8-13.8 13.8S10.2 32.6 10.2 25c0-3.1 1-6.1 2.9-8.5M27.5 2.9h-7.1c-.3 0-.5.2-.5.5v12.3c0 .3.2.5.5.5h7.1c.3 0 .5-.2.5-.5V3.5c.1-.3-.2-.6-.5-.6"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.6 8c5.9 3.7 9.5 10.1 9.5 17c0 11-9.1 20.1-20.1 20.1S3.9 36 3.9 25a20 20 0 0 1 9.4-17"></svg:path>`,
})
export class ArcticonsAnLightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
