import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsYamapsIcon],svg[arcticons-yamaps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.93 4.25a12 12 0 1 0 12.13 11.9h0a12 12 0 0 0-12.13-11.9m0 7.43a4.57 4.57 0 0 1 4.61 4.52v0A4.59 4.59 0 1 1 24 11.68Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.82 18.66C33.45 27.32 27 34 21.46 43.25l3.05-15"></svg:path>`,
})
export class ArcticonsYamapsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
