import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentShareAndroid32RegularIcon],svg[fluent-share-android-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 7.5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0M24.5 3a4.5 4.5 0 0 0-4.372 5.568l-9.15 4.575a4.5 4.5 0 1 0 0 5.713l9.15 4.576Q20 23.946 20 24.5a4.5 4.5 0 1 0 1.023-2.857l-9.15-4.575a4.5 4.5 0 0 0 0-2.136l9.15-4.575A4.5 4.5 0 1 0 24.5 3M5 16a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0m19.5 6a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5"></svg:path>`,
})
export class FluentShareAndroid32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
