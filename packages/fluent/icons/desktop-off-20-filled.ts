import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDesktopOff20FilledIcon],svg[fluent-desktop-off-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.293 15l2.853 2.854a.5.5 0 0 0 .708-.708l-15-15a.5.5 0 0 0-.708.707A1.5 1.5 0 0 0 2 3.5v10A1.5 1.5 0 0 0 3.5 15H7v2H5.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1H13v-2zM18 13.5a1.5 1.5 0 0 1-.974 1.405L4.121 2H16.5A1.5 1.5 0 0 1 18 3.5zM12 15v2H8v-2z"></svg:path>`,
})
export class FluentDesktopOff20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
