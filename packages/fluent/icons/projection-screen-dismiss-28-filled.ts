import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentProjectionScreenDismiss28FilledIcon],svg[fluent-projection-screen-dismiss-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 7.5a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0m-9.146-3.354a.5.5 0 0 0-.708.708L19.793 7.5l-2.647 2.646a.5.5 0 0 0 .708.708L20.5 8.207l2.646 2.647a.5.5 0 0 0 .708-.708L21.207 7.5l2.647-2.646a.5.5 0 0 0-.708-.708L20.5 6.793zM20.5 15a7.47 7.47 0 0 0 4.5-1.5v2.75a4.25 4.25 0 0 1-4.25 4.25h-6v3h4.5a.75.75 0 0 1 0 1.5H8.75a.75.75 0 0 1 0-1.5h4.5v-3h-6A4.25 4.25 0 0 1 3 16.25V6.732A2 2 0 0 1 4 3h10.5a7.5 7.5 0 0 0 6 12"></svg:path>`,
})
export class FluentProjectionScreenDismiss28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
