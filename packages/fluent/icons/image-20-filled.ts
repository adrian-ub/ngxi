import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentImage20FilledIcon],svg[fluent-image-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3a3 3 0 0 0-3 3v8c0 .65.206 1.25.557 1.742l5.39-5.308a1.5 1.5 0 0 1 2.105 0l5.39 5.308A2.98 2.98 0 0 0 17 14V6a3 3 0 0 0-3-3zm0 14a3 3 0 0 1-1.735-.552l5.384-5.3a.5.5 0 0 1 .702 0l5.384 5.3A3 3 0 0 1 14 17zm6.5-8.25a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5"></svg:path>`,
})
export class FluentImage20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
