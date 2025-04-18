import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPresenceBusy10FilledIcon],svg[fluent-presence-busy-10-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 5A5 5 0 1 1 0 5a5 5 0 0 1 10 0"></svg:path>`,
})
export class FluentPresenceBusy10FilledIcon {
  readonly viewBox = input("0 0 10 10")
  readonly width = input("1em")
  readonly height = input("1em")
}
