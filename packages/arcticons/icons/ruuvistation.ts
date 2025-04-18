import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRuuvistationIcon],svg[arcticons-ruuvistation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.287 10.205a13.8 13.8 0 0 0-5.037 1.002a6.507 6.507 0 0 1-4.554 11.156h0a6.5 6.5 0 0 1-3.786-1.215a13.795 13.795 0 1 0 13.496-10.943z"></svg:path>`,
})
export class ArcticonsRuuvistationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
