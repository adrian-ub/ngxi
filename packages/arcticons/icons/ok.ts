import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOkIcon],svg[arcticons-ok-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="23.997" cy="13.762" r="8.034" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.219 26.897a17.53 17.53 0 0 0 11.778 4.514c4.53 0 8.679-1.7 11.794-4.514M16.792 44.729l5.764-13.311m8.645 13.311l-5.788-13.368"></svg:path>`,
})
export class ArcticonsOkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
