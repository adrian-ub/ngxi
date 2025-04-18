import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSlideRecord24RegularIcon],svg[fluent-slide-record-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 8.75A.75.75 0 0 1 6.75 8h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 6 8.75M6.75 11a.75.75 0 0 0 0 1.5h6.596a6.5 6.5 0 0 1 2.442-1.272a.75.75 0 0 0-.538-.228zm13.75.732V6.75c0-.69-.56-1.25-1.25-1.25H4.75c-.69 0-1.25.56-1.25 1.25v10.5c0 .69.56 1.25 1.25 1.25h6.326c.081.523.224 1.026.422 1.5H4.75A2.75 2.75 0 0 1 2 17.25V6.75A2.75 2.75 0 0 1 4.75 4h14.5A2.75 2.75 0 0 1 22 6.75v6.06a6.5 6.5 0 0 0-1.5-1.078M12.022 14a6.5 6.5 0 0 0-.709 1.5H6.75a.75.75 0 0 1 0-1.5zm5.478 7.5a4 4 0 1 1 0-8a4 4 0 0 1 0 8m0 1.5a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11m0-3a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></svg:path>`,
})
export class FluentSlideRecord24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
