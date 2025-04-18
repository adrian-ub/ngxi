import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentShareAndroid16FilledIcon],svg[fluent-share-android-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 4a2 2 0 1 1 .492 1.313L5.956 7.581a2 2 0 0 1 0 .838l4.536 2.268a2 2 0 1 1-.447.894L5.507 9.313a2 2 0 1 1 0-2.626l4.536-2.268A2 2 0 0 1 10 4"></svg:path>`,
})
export class FluentShareAndroid16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
