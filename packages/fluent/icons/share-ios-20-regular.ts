import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentShareIos20RegularIcon],svg[fluent-share-ios-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.354 2.146a.5.5 0 0 0-.708 0l-4.5 4.5a.5.5 0 1 0 .708.708L9.5 3.707V12.5a.5.5 0 0 0 1 0V3.707l3.646 3.647a.5.5 0 0 0 .708-.708zM4 9.5a.5.5 0 0 0-1 0V14a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V9.5a.5.5 0 0 0-1 0V14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path>`,
})
export class FluentShareIos20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
