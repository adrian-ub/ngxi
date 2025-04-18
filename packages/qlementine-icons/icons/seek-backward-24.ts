import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsSeekBackward24Icon],svg[qlementine-icons-seek-backward-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.4 3.09a1 1 0 0 1 .59.912v16a1 1 0 0 1-1.66.747l-9-8a.996.996 0 0 1 0-1.494l9-8a.99.99 0 0 1 1.07-.165m12 0a1 1 0 0 1 .59.912v16a1 1 0 0 1-1.66.747l-9-8a1 1 0 0 1 0-1.494l9-8a.99.99 0 0 1 1.07-.165"></svg:path>`,
})
export class QlementineIconsSeekBackward24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
