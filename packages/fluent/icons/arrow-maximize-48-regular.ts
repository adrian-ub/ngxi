import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowMaximize48RegularIcon],svg[fluent-arrow-maximize-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M40.75 24c-.69 0-1.25-.56-1.25-1.25V10.268L10.268 39.5H22.75a1.25 1.25 0 1 1 0 2.5H7.25C6.56 42 6 41.44 6 40.75v-15.5a1.25 1.25 0 1 1 2.5 0v12.482L37.732 8.5H25.25a1.25 1.25 0 1 1 0-2.5h15.5c.69 0 1.25.56 1.25 1.25v15.5c0 .69-.56 1.25-1.25 1.25"></svg:path>`,
})
export class FluentArrowMaximize48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
