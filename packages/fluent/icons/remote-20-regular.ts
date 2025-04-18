import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRemote20RegularIcon],svg[fluent-remote-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.146 14.854a.5.5 0 0 0 .708-.708L12.207 8.5l5.647-5.646a.5.5 0 0 0-.708-.708l-6 6a.5.5 0 0 0 0 .708zM2.854 5.146a.5.5 0 1 0-.708.708L7.793 11.5l-5.647 5.646a.5.5 0 0 0 .708.708l6-6a.5.5 0 0 0 0-.708z"></svg:path>`,
})
export class FluentRemote20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
