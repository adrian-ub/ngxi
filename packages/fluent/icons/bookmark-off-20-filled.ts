import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBookmarkOff20FilledIcon],svg[fluent-bookmark-off-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 16.707l1.146 1.147a.5.5 0 0 0 .708-.708l-15-15a.5.5 0 1 0-.708.708L4 4.707V17.5a.5.5 0 0 0 .794.404L10 14.118l5.206 3.786A.5.5 0 0 0 16 17.5zM16 4.5v9.379L4.794 2.673A2.5 2.5 0 0 1 6.5 2h7A2.5 2.5 0 0 1 16 4.5"></svg:path>`,
})
export class FluentBookmarkOff20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
