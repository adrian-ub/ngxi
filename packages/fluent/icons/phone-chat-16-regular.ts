import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPhoneChat16RegularIcon],svg[fluent-phone-chat-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.75 1A1.75 1.75 0 0 0 4 2.75v10.5c0 .966.784 1.75 1.75 1.75h.367l.304-1H5.75a.75.75 0 0 1-.75-.75V2.75A.75.75 0 0 1 5.75 2h4.5a.75.75 0 0 1 .75.75v3.272a5.6 5.6 0 0 1 1 0V2.75A1.75 1.75 0 0 0 10.25 1zm5.75 15a4.5 4.5 0 1 0-3.936-2.318l-.545 1.789a.41.41 0 0 0 .51.51l1.79-.544A4.5 4.5 0 0 0 11.5 16M9 10.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1z"></svg:path>`,
})
export class FluentPhoneChat16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
