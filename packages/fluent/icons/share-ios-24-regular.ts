import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentShareIos24RegularIcon],svg[fluent-share-ios-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.53 2.22a.75.75 0 0 0-1.06 0L6.22 7.47a.75.75 0 0 0 1.06 1.06l3.97-3.97v10.69a.75.75 0 0 0 1.5 0V4.56l3.97 3.97a.75.75 0 1 0 1.06-1.06zM3.75 11a.75.75 0 0 1 .75.75v6c0 .966.784 1.75 1.75 1.75h11.5a1.75 1.75 0 0 0 1.75-1.75v-6a.75.75 0 0 1 1.5 0v6A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75v-6a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class FluentShareIos24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
