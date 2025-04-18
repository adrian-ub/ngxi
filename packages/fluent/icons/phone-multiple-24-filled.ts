import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPhoneMultiple24FilledIcon],svg[fluent-phone-multiple-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.25 2A2.25 2.25 0 0 0 6 4.25v13a2.25 2.25 0 0 0 2.25 2.25h5.5A2.25 2.25 0 0 0 16 17.25v-13A2.25 2.25 0 0 0 13.75 2zM9 16.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75M10.75 22a2.25 2.25 0 0 1-2.122-1.5h5.622A2.75 2.75 0 0 0 17 17.75V4.628a2.25 2.25 0 0 1 1.5 2.122v11A4.25 4.25 0 0 1 14.25 22z"></svg:path>`,
})
export class FluentPhoneMultiple24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
