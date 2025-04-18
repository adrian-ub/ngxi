import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDelimobilIcon],svg[arcticons-delimobil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.703 39.77A18.5 18.5 0 0 1 17.74 25.092L5.5 14.75m9.25 27.75a9.25 9.25 0 0 1 18.5 0h0m9.25-27.75H19.829l16.114 13.621a18.5 18.5 0 0 1 6.354 11.391"></svg:path>`,
})
export class ArcticonsDelimobilIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
