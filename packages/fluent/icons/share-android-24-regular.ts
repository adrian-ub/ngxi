import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentShareAndroid24RegularIcon],svg[fluent-share-android-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2.498a3.502 3.502 0 1 1-2.597 5.851l-4.558 2.605a3.5 3.5 0 0 1 0 2.092l4.557 2.606a3.502 3.502 0 1 1-.745 1.302L9.1 14.347a3.502 3.502 0 1 1 0-4.698l4.557-2.604A3.502 3.502 0 0 1 17 2.498m0 13.5a2.002 2.002 0 1 0 0 4.004a2.002 2.002 0 0 0 0-4.004m-10.498-6a2.002 2.002 0 1 0 0 4.004a2.002 2.002 0 0 0 0-4.004m10.498-6a2.002 2.002 0 1 0 0 4.004a2.002 2.002 0 0 0 0-4.004"></svg:path>`,
})
export class FluentShareAndroid24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
