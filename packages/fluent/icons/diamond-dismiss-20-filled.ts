import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDiamondDismiss20FilledIcon],svg[fluent-diamond-dismiss-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.877 2.879a3 3 0 0 1 4.242 0l4.998 4.998a3 3 0 0 1 0 4.242l-4.998 4.998a3 3 0 0 1-4.242 0L2.879 12.12a3 3 0 0 1 0-4.242zm-.023 4.267a.5.5 0 1 0-.708.708L9.293 10l-2.147 2.146a.5.5 0 0 0 .708.708L10 10.707l2.146 2.147a.5.5 0 0 0 .708-.708L10.707 10l2.147-2.146a.5.5 0 0 0-.708-.708L10 9.293z"></svg:path>`,
})
export class FluentDiamondDismiss20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
