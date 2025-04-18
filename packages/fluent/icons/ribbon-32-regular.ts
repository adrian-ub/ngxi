import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRibbon32RegularIcon],svg[fluent-ribbon-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2C10.477 2 6 6.477 6 12a9.99 9.99 0 0 0 4 8v9a1 1 0 0 0 1.515.858L16 27.166l4.485 2.692A1 1 0 0 0 22 29v-9a9.99 9.99 0 0 0 4-8c0-5.523-4.477-10-10-10M8 12a8 8 0 1 1 16 0a8 8 0 0 1-16 0m12 9.168v6.066l-3.485-2.092a1 1 0 0 0-1.03 0L12 27.234v-6.066A10 10 0 0 0 16 22a10 10 0 0 0 4-.832"></svg:path>`,
})
export class FluentRibbon32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
