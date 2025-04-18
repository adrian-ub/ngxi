import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAppsAddIn16FilledIcon],svg[fluent-apps-add-in-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.25 1a.75.75 0 0 1 .75.75V3h1.25a.75.75 0 0 1 0 1.5H13v1.25a.75.75 0 0 1-1.5 0V4.5h-1.25a.75.75 0 0 1 0-1.5h1.25V1.75a.75.75 0 0 1 .75-.75m-8.5 2.5H7a.25.25 0 0 1 .25.25v3.5H3.5v-3.5a.25.25 0 0 1 .25-.25m5 3.75v-3.5A1.75 1.75 0 0 0 7 2H3.75A1.75 1.75 0 0 0 2 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0 0 14 12.25V9a1.75 1.75 0 0 0-1.75-1.75zm-1.5 1.5v3.75h-3.5a.25.25 0 0 1-.25-.25v-3.5zm1.5 3.75V8.75h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.25.25z"></svg:path>`,
})
export class FluentAppsAddIn16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
