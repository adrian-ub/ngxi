import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWetypeIcon],svg[arcticons-wetype-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.2 8.586h1.354c5.173 0 8.661 3.666 7.821 8.22s-5.682 8.222-10.855 8.222H5.5M24.747 8.587l-8.719 30.827"></svg:path>`,
})
export class ArcticonsWetypeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
