import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentShareAndroid20FilledIcon],svg[fluent-share-android-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 5.5a2.5 2.5 0 0 1-4.467 1.543L7.915 9.352a2.5 2.5 0 0 1 0 1.297l4.618 2.308a2.5 2.5 0 1 1-.448.894l-4.618-2.308a2.5 2.5 0 1 1 0-3.085l4.618-2.31A2.504 2.504 0 0 1 14.5 3A2.5 2.5 0 0 1 17 5.5"></svg:path>`,
})
export class FluentShareAndroid20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
