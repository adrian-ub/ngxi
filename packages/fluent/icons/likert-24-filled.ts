import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLikert24FilledIcon],svg[fluent-likert-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4H5a3 3 0 0 0-3 3v4.25h4zm-4 8.75V17a3 3 0 0 0 3 3h1v-7.25zM7.5 20H19a3 3 0 0 0 3-3v-4.25H7.5zm3.75-3.75a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2.75 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2-5H7.5V4H19a3 3 0 0 1 3 3zm-11.75-2.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3.75-1a1 1 0 1 0-2 0a1 1 0 0 0 2 0m3 0a1 1 0 1 0-2 0a1 1 0 0 0 2 0m3 0a1 1 0 1 0-2 0a1 1 0 0 0 2 0"></svg:path>`,
})
export class FluentLikert24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
