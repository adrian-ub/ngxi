import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChannelShare12RegularIcon],svg[fluent-channel-share-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3.085a1.5 1.5 0 1 0 0-1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1h1a2 2 0 0 0-2-2zm5 6.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0M9 11a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H5.915a1.5 1.5 0 1 0 0 1H9a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1H4a2 2 0 0 0 2 2zM4.5 5a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1"></svg:path>`,
})
export class FluentChannelShare12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
