import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDiamondDismiss20RegularIcon],svg[fluent-diamond-dismiss-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.12 2.879a3 3 0 0 0-4.243 0L2.879 7.877a3 3 0 0 0 0 4.242l4.998 4.998a3 3 0 0 0 4.242 0l4.998-4.998a3 3 0 0 0 0-4.242zm-3.536.707a2 2 0 0 1 2.828 0l4.998 4.998a2 2 0 0 1 0 2.828l-4.998 4.998a2 2 0 0 1-2.828 0l-4.998-4.998a2 2 0 0 1 0-2.828zm-.73 3.56a.5.5 0 1 0-.708.708L9.293 10l-2.147 2.146a.5.5 0 0 0 .708.708L10 10.707l2.146 2.147a.5.5 0 0 0 .708-.708L10.707 10l2.147-2.146a.5.5 0 0 0-.708-.708L10 9.293z"></svg:path>`,
})
export class FluentDiamondDismiss20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
