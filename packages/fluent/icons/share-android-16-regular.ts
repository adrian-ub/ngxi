import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentShareAndroid16RegularIcon],svg[fluent-share-android-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-2 1a2 2 0 1 1 .491 1.313L5.956 7.581a2 2 0 0 1 0 .838l4.535 2.268a2 2 0 1 1-.447.894L5.508 9.313a2 2 0 1 1 0-2.627l4.536-2.267A2 2 0 0 1 10 4M3 8a1 1 0 1 0 2 0a1 1 0 0 0-2 0m8 4a1 1 0 1 0 2 0a1 1 0 0 0-2 0"></svg:path>`,
})
export class FluentShareAndroid16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
