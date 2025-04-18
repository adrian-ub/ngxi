import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOuStudyIcon],svg[arcticons-ou-study-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.447 27.947V5.5h29.106v22.447C38.553 35.985 32.037 42.5 24 42.5S9.447 35.984 9.447 27.947"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.93 8.535a5.76 5.76 0 0 1 5.764 5.765a5.766 5.766 0 0 1-5.765 5.765c-3.176 0-5.752-2.588-5.752-5.765a5.757 5.757 0 0 1 5.752-5.765"></svg:path>`,
})
export class ArcticonsOuStudyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
