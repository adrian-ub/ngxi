import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentShareIos20FilledIcon],svg[fluent-share-ios-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.287 2.057a.75.75 0 0 0-.817.163L5.22 6.47a.75.75 0 0 0 1.06 1.06l2.97-2.97v7.69a.75.75 0 0 0 1.5 0V4.56l2.97 2.97a.75.75 0 1 0 1.06-1.06l-4.25-4.25a.8.8 0 0 0-.243-.163M3.75 9a.75.75 0 0 1 .75.75v4c0 .966.784 1.75 1.75 1.75h7.5a1.75 1.75 0 0 0 1.75-1.75v-4a.75.75 0 0 1 1.5 0v4A3.25 3.25 0 0 1 13.75 17h-7.5A3.25 3.25 0 0 1 3 13.75v-4A.75.75 0 0 1 3.75 9"></svg:path>`,
})
export class FluentShareIos20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
