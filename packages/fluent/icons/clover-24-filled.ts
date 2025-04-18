import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentClover24FilledIcon],svg[fluent-clover-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.75 2a4.75 4.75 0 0 0 0 9.5h4a.75.75 0 0 0 .75-.75v-4A4.75 4.75 0 0 0 6.75 2m0 20a4.75 4.75 0 1 1 0-9.5h4a.75.75 0 0 1 .75.75v4A4.75 4.75 0 0 1 6.75 22m10.5-20a4.75 4.75 0 1 1 0 9.5h-4a.75.75 0 0 1-.75-.75v-4A4.75 4.75 0 0 1 17.25 2m0 20a4.75 4.75 0 1 0 0-9.5h-4a.75.75 0 0 0-.75.75v4A4.75 4.75 0 0 0 17.25 22"></svg:path>`,
})
export class FluentClover24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
