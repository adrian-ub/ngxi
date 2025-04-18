import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowExit16RegularIcon],svg[fluent-arrow-exit-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 2A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h6a.5.5 0 0 0 0-1h-6A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3h6a.5.5 0 0 0 0-1zm7.354 2.646a.5.5 0 0 0-.708.708L13.293 7.5H6.5a.5.5 0 0 0 0 1h6.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708z"></svg:path>`,
})
export class FluentArrowExit16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
