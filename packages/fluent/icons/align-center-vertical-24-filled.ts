import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAlignCenterVertical24FilledIcon],svg[fluent-align-center-vertical-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 21.25a.75.75 0 0 0 1.5 0V20h2.5a2.25 2.25 0 0 0 2.25-2.25v-2.5A2.25 2.25 0 0 0 15.25 13h-2.5v-2h4.5a2.25 2.25 0 0 0 2.25-2.25v-2.5A2.25 2.25 0 0 0 17.25 4h-4.5V2.75a.75.75 0 0 0-1.5 0V4h-4.5A2.25 2.25 0 0 0 4.5 6.25v2.5A2.25 2.25 0 0 0 6.75 11h4.5v2h-2.5a2.25 2.25 0 0 0-2.25 2.25v2.5A2.25 2.25 0 0 0 8.75 20h2.5z"></svg:path>`,
})
export class FluentAlignCenterVertical24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
