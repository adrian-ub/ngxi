import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChannelShare20RegularIcon],svg[fluent-channel-share-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5.5A2.5 2.5 0 0 1 5.5 3h5A2.5 2.5 0 0 1 13 5.5a.5.5 0 0 1-1 0A1.5 1.5 0 0 0 10.5 4h-5A1.5 1.5 0 0 0 4 5.5v5A1.5 1.5 0 0 0 5.5 12h4.514a2.25 2.25 0 1 1 .114 1H5.5A2.5 2.5 0 0 1 3 10.5zm8 6.75a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 0 0-2.5 0M7.5 14a.5.5 0 0 0-.5.5A2.5 2.5 0 0 0 9.5 17h5a2.5 2.5 0 0 0 2.5-2.5v-5A2.5 2.5 0 0 0 14.5 7H9.872a2.25 2.25 0 1 0 .114 1H14.5A1.5 1.5 0 0 1 16 9.5v5a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 8 14.5a.5.5 0 0 0-.5-.5m.25-7.5a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5"></svg:path>`,
})
export class FluentChannelShare20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
