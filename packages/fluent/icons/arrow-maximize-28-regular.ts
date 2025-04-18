import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowMaximize28RegularIcon],svg[fluent-arrow-maximize-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.25 3h8a.75.75 0 0 1 .743.648L25 3.75v8a.75.75 0 0 1-1.493.102l-.007-.102V5.56L5.56 23.5h6.19a.75.75 0 0 1 .743.648l.007.102a.75.75 0 0 1-.648.743L11.75 25h-8a.75.75 0 0 1-.743-.648L3 24.25v-8a.75.75 0 0 1 1.493-.102l.007.102v6.188L22.438 4.5H16.25a.75.75 0 0 1-.743-.648L15.5 3.75a.75.75 0 0 1 .648-.743zh8z"></svg:path>`,
})
export class FluentArrowMaximize28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
