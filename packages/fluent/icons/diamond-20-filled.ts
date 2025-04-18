import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDiamond20FilledIcon],svg[fluent-diamond-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.12 2.879a3 3 0 0 0-4.243 0L2.879 7.877a3 3 0 0 0 0 4.242l4.998 4.998a3 3 0 0 0 4.242 0l4.998-4.998a3 3 0 0 0 0-4.242z"></svg:path>`,
})
export class FluentDiamond20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
