import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDrawerDismiss20FilledIcon],svg[fluent-drawer-dismiss-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 10a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m1.854-6.354a.5.5 0 0 1 0 .708L14.207 5.5l1.147 1.146a.5.5 0 0 1-.708.708L13.5 6.207l-1.146 1.147a.5.5 0 0 1-.708-.708L12.793 5.5l-1.147-1.146a.5.5 0 0 1 .708-.708L13.5 4.793l1.146-1.147a.5.5 0 0 1 .708 0M8.207 4H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V9.743a5.5 5.5 0 0 1-1 .657v.6h-3.5a.5.5 0 0 0-.5.5a2 2 0 1 1-4 0a.5.5 0 0 0-.5-.5H4V8h4.6a5.5 5.5 0 0 1-.393-1H4a2 2 0 0 1 2-2h2.022a5.5 5.5 0 0 1 .185-1"></svg:path>`,
})
export class FluentDrawerDismiss20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
