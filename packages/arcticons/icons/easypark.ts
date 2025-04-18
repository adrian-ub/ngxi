import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEasyparkIcon],svg[arcticons-easypark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m9.838 29.377l20.544-4.943c10.757-2.588 9.506-15.966 1.453-18.315C20.35 2.769 9.838 4.485 9.838 12.515v23.451c0 13.2 26.746 5.04 26.746 5.04"></svg:path>`,
})
export class ArcticonsEasyparkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
