import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTabDesktop16FilledIcon],svg[fluent-tab-desktop-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H8.5A1.5 1.5 0 0 1 7 3.5zm7 2a2 2 0 0 0-2-2H8v1.5a.5.5 0 0 0 .5.5z"></svg:path>`,
})
export class FluentTabDesktop16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
