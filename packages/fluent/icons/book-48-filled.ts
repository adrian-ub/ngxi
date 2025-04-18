import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBook48FilledIcon],svg[fluent-book-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.25 4A6.25 6.25 0 0 0 8 10.25v27.5A6.25 6.25 0 0 0 14.25 44h24.5a1.25 1.25 0 1 0 0-2.5h-24.5a3.75 3.75 0 0 1-3.675-3H37.75A2.25 2.25 0 0 0 40 36.25v-26A6.25 6.25 0 0 0 33.75 4zM14 12.25A2.25 2.25 0 0 1 16.25 10h15.5A2.25 2.25 0 0 1 34 12.25v2.5A2.25 2.25 0 0 1 31.75 17h-15.5A2.25 2.25 0 0 1 14 14.75z"></svg:path>`,
})
export class FluentBook48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
