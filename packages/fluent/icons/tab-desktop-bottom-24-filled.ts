import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTabDesktopBottom24FilledIcon],svg[fluent-tab-desktop-bottom-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6.25A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H14.5v-3.25a2.25 2.25 0 0 0-2.25-2.25H3zM3 17v.75A3.25 3.25 0 0 0 6.25 21H13v-3.25a.75.75 0 0 0-.75-.75z"></svg:path>`,
})
export class FluentTabDesktopBottom24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
