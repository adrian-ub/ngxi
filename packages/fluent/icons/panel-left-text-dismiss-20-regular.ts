import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPanelLeftTextDismiss20RegularIcon],svg[fluent-panel-left-text-dismiss-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.59 6.992A.5.5 0 0 0 6.5 6h-2l-.09.008A.5.5 0 0 0 4.5 7h2zm0 3A.5.5 0 0 0 6.5 9h-2l-.09.008A.5.5 0 0 0 4.5 10h2zM7 12.5a.5.5 0 0 1-.41.492L6.5 13h-2a.5.5 0 0 1-.09-.992L4.5 12h2a.5.5 0 0 1 .5.5M5 3a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h4.207a5.5 5.5 0 0 1-.185-1H9V4h6a2 2 0 0 1 2 2v3.6q.538.276 1 .657V6a3 3 0 0 0-3-3zm0 1h3v11H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m14 10.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-3.793 0l1.147-1.146a.5.5 0 0 0-.708-.708L14.5 13.793l-1.146-1.147a.5.5 0 0 0-.708.708l1.147 1.146l-1.147 1.146a.5.5 0 0 0 .708.708l1.146-1.147l1.146 1.147a.5.5 0 0 0 .708-.708z"></svg:path>`,
})
export class FluentPanelLeftTextDismiss20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
