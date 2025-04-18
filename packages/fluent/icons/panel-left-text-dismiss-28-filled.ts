import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPanelLeftTextDismiss28FilledIcon],svg[fluent-panel-left-text-dismiss-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.754 4a3.75 3.75 0 0 0-3.75 3.75v11.5A3.75 3.75 0 0 0 5.754 23h7.673a7.5 7.5 0 0 1-.36-1.5H11v-16h11.25a2.25 2.25 0 0 1 2.25 2.25v6.405c.554.35 1.058.769 1.5 1.247V7.75A3.75 3.75 0 0 0 22.25 4zM5 8.5a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 5 8.5m0 5a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 5 13.5m.75 4.25h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1 0-1.5M27 20.5a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0m-9.146-3.354a.5.5 0 0 0-.708.708l2.647 2.646l-2.647 2.646a.5.5 0 0 0 .708.708l2.646-2.647l2.646 2.647a.5.5 0 0 0 .708-.708L21.207 20.5l2.647-2.646a.5.5 0 0 0-.708-.708L20.5 19.793z"></svg:path>`,
})
export class FluentPanelLeftTextDismiss28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
