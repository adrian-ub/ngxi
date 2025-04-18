import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsSeekForward24Icon],svg[qlementine-icons-seek-forward-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.6 3.09a1 1 0 0 0-.59.912v16a1 1 0 0 0 1.66.747l9-8a1 1 0 0 0 0-1.494l-9-8a.99.99 0 0 0-1.07-.165m-12.01 0a1 1 0 0 0-.59.912v16a1 1 0 0 0 1.66.747l9-8a1 1 0 0 0 0-1.494l-9-8A.99.99 0 0 0 .59 3.09"></svg:path>`,
})
export class QlementineIconsSeekForward24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
