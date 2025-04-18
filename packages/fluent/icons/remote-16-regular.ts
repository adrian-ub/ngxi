import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRemote16RegularIcon],svg[fluent-remote-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.854 2.854a.5.5 0 0 0-.708-.708l-4.5 4.5a.5.5 0 0 0 0 .708l4.5 4.5a.5.5 0 0 0 .708-.708L9.707 7zm-11 1.292a.5.5 0 1 0-.708.708L6.293 9l-4.147 4.146a.5.5 0 0 0 .708.708l4.5-4.5a.5.5 0 0 0 0-.708z"></svg:path>`,
})
export class FluentRemote16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
