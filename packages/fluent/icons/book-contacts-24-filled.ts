import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBookContacts24FilledIcon],svg[fluent-book-contacts-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4.5A2.5 2.5 0 0 1 6.5 2h11A2.5 2.5 0 0 1 20 4.5v14.25a.75.75 0 0 1-.75.75H5.5a1 1 0 0 0 1 1h12.75a.75.75 0 0 1 0 1.5H6.5A2.5 2.5 0 0 1 4 19.5zM14 8a2 2 0 1 0-4 0a2 2 0 0 0 4 0m1.5 4.5A1.5 1.5 0 0 0 14 11h-4a1.5 1.5 0 0 0-1.5 1.5c0 1.25 1 2.5 3.5 2.5s3.5-1.255 3.5-2.5"></svg:path>`,
})
export class FluentBookContacts24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
