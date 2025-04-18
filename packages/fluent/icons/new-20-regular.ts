import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNew20RegularIcon],svg[fluent-new-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 3a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0v-8a.5.5 0 0 1 .5-.5M6.146 6.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708M3.5 15a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentNew20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
