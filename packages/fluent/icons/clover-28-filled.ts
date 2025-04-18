import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentClover28FilledIcon],svg[fluent-clover-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.75 2a5.75 5.75 0 1 0 0 11.5h5a.75.75 0 0 0 .75-.75v-5A5.75 5.75 0 0 0 7.75 2m0 24a5.75 5.75 0 0 1 0-11.5h5a.75.75 0 0 1 .75.75v5A5.75 5.75 0 0 1 7.75 26m12.5-24a5.75 5.75 0 0 1 0 11.5h-5a.75.75 0 0 1-.75-.75v-5A5.75 5.75 0 0 1 20.25 2m0 24a5.75 5.75 0 0 0 0-11.5h-5a.75.75 0 0 0-.75.75v5A5.75 5.75 0 0 0 20.25 26"></svg:path>`,
})
export class FluentClover28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
