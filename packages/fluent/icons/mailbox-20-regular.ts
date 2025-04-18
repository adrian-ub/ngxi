import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMailbox20RegularIcon],svg[fluent-mailbox-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5H7v3H5.5A3.5 3.5 0 0 0 2 11.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-5.5A3.5 3.5 0 0 0 14.5 8H8V2.5a.5.5 0 0 0-.5-.5zM7 9v2.5a.5.5 0 0 0 1 0V9h4.05A3.5 3.5 0 0 0 11 11.5V17H3v-5.5A2.5 2.5 0 0 1 5.5 9zm10 2.5V17h-5v-5.5a2.5 2.5 0 0 1 5 0m-3-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentMailbox20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
