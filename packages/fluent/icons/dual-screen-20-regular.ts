import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDualScreen20RegularIcon],svg[fluent-dual-screen-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 13.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m6.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zM4 4h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m5.5 1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5.5zm1 10H16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-5.5z"></svg:path>`,
})
export class FluentDualScreen20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
