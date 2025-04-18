import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsIdenticonizerIcon],svg[arcticons-identiconizer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.1 35.1h7.4v7.4h-7.4zm-29.6 0h7.4v7.4H5.5z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 27.7V12.9h-7.4v7.4h-7.4v-7.4h7.4V5.5H12.9v7.4h7.4v7.4h-7.4v-7.4H5.5v14.8h7.4v7.4h7.4v7.4h7.4v-7.4h7.4v-7.4z"></svg:path>`,
})
export class ArcticonsIdenticonizerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
