import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentShareAndroid32FilledIcon],svg[fluent-share-android-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 7.5q.001.553.128 1.068l-9.15 4.575a4.5 4.5 0 1 0 0 5.713l9.15 4.576Q20 23.947 20 24.5a4.5 4.5 0 1 0 1.023-2.857l-9.15-4.575a4.5 4.5 0 0 0 0-2.136l9.15-4.575A4.5 4.5 0 1 0 20 7.5"></svg:path>`,
})
export class FluentShareAndroid32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
