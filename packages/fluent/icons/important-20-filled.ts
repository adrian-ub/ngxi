import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentImportant20FilledIcon],svg[fluent-important-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2a3 3 0 0 0-3 3c0 2.227.789 5.204 1.225 6.685A1.84 1.84 0 0 0 10 13c.81 0 1.54-.518 1.775-1.31C12.212 10.213 13 7.25 13 5a3 3 0 0 0-3-3m0 12a2 2 0 1 0 0 4a2 2 0 0 0 0-4"></svg:path>`,
})
export class FluentImportant20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
