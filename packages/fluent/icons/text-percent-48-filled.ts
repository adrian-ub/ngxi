import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextPercent48FilledIcon],svg[fluent-text-percent-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M35.968 6.256a1.5 1.5 0 0 1 .404 2.083l-22.258 33a1.5 1.5 0 0 1-2.487-1.678l22.258-33a1.5 1.5 0 0 1 2.083-.405M13.5 9a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11M5 14.5a8.5 8.5 0 1 1 17 0a8.5 8.5 0 0 1-17 0m24 19a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0m5.5-8.5a8.5 8.5 0 1 0 0 17a8.5 8.5 0 0 0 0-17"></svg:path>`,
})
export class FluentTextPercent48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
