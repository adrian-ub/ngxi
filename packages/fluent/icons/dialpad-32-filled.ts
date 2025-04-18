import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDialpad32FilledIcon],svg[fluent-dialpad-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0 7a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0 7a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m7-14a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0 7a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0 7a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0 7a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m7-21a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0 7a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0 7a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></svg:path>`,
})
export class FluentDialpad32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
