import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTimer20RegularIcon],svg[fluent-timer-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm7.656 1.929a.5.5 0 1 0-.707.707l1.414 1.414a.5.5 0 1 0 .707-.707zM9.5 6a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5m0 12a7 7 0 1 0 0-14a7 7 0 0 0 0 14m0-1a6 6 0 1 1 0-12a6 6 0 0 1 0 12"></svg:path>`,
})
export class FluentTimer20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
