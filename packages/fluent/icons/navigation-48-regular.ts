import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNavigation48RegularIcon],svg[fluent-navigation-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 11.25c0-.69.56-1.25 1.25-1.25h37.5a1.25 1.25 0 1 1 0 2.5H5.25c-.69 0-1.25-.56-1.25-1.25m0 13c0-.69.56-1.25 1.25-1.25h37.5a1.25 1.25 0 1 1 0 2.5H5.25c-.69 0-1.25-.56-1.25-1.25M5.25 36a1.25 1.25 0 1 0 0 2.5h37.5a1.25 1.25 0 1 0 0-2.5z"></svg:path>`,
})
export class FluentNavigation48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
