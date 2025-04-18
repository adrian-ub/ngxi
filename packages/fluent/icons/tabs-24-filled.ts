import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTabs24FilledIcon],svg[fluent-tabs-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 9.25A7.25 7.25 0 0 1 9.25 2h3.5a3.25 3.25 0 0 1 3 2h-5.5A6.25 6.25 0 0 0 4 10.25v5.5a3.25 3.25 0 0 1-2-3zm3 1C5 7.35 7.35 5 10.25 5h5.5a3.25 3.25 0 0 1 3 2h-7.5A4.25 4.25 0 0 0 7 11.25v7.5a3.25 3.25 0 0 1-2-3zM11.25 8A3.25 3.25 0 0 0 8 11.25v7.5A3.25 3.25 0 0 0 11.25 22h7.5A3.25 3.25 0 0 0 22 18.75v-7.5A3.25 3.25 0 0 0 18.75 8z"></svg:path>`,
})
export class FluentTabs24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
