import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNingIcon],svg[arcticons-ning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m30.1 12.25l-9.3 20.9c-1.5 3.4 5.8 6 6.6 1.9l4.3-22.5c.2-1.4-.9-1.8-1.6-.3"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.65 11.49a28.64 28.64 0 0 0-26.88 7.6m40.46 0a28.56 28.56 0 0 0-12.51-7.32m-5.34 8.83A18.87 18.87 0 0 0 10.66 26m26.68 0A18.75 18.75 0 0 0 30 21.43"></svg:path>`,
})
export class ArcticonsNingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
