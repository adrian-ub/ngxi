import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsElementaryIcon],svg[arcticons-elementary-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.332 30.81h9.655M13.332 11.5h9.655m-9.655 9.655h6.275M13.332 11.5v19.31m16.75-.827L25.013 17.19m9.655 0l-6.034 17.379a2.82 2.82 0 0 1-2.655 1.931h-.725"></svg:path>`,
})
export class ArcticonsElementaryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
