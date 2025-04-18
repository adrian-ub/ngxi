import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDesk48RegularIcon],svg[fluent-desk-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.25 8A4.25 4.25 0 0 0 4 12.25v21.5A6.25 6.25 0 0 0 10.25 40h7.5A6.25 6.25 0 0 0 24 33.75V18.5h17.5v20.25a1.25 1.25 0 1 0 2.5 0v-26.5A4.25 4.25 0 0 0 39.75 8zM6.5 18.5h15v15.25a3.75 3.75 0 0 1-3.75 3.75h-7.5a3.75 3.75 0 0 1-3.75-3.75zm0-2.5v-3.75c0-.966.784-1.75 1.75-1.75h31.5c.967 0 1.75.784 1.75 1.75V16zm4.75 7a1.25 1.25 0 1 0 0 2.5h5.5a1.25 1.25 0 1 0 0-2.5z"></svg:path>`,
})
export class FluentDesk48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
