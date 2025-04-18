import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAppsAddIn28FilledIcon],svg[fluent-apps-add-in-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0V8h-3a1 1 0 1 1 0-2h3V3a1 1 0 0 1 1-1M6 3a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3h-7V6a3 3 0 0 0-3-3zm7 10H5V6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1zm2 10v-8h7a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1zm-2 0H6a1 1 0 0 1-1-1v-7h8z"></svg:path>`,
})
export class FluentAppsAddIn28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
