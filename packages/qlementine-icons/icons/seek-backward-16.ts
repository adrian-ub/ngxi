import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsSeekBackward16Icon],svg[qlementine-icons-seek-backward-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 12.7c0 .874-1.04 1.33-1.68.731l-5.03-4.7a.997.997 0 0 1 0-1.46l5.03-4.7c.639-.597 1.68-.143 1.68.731v9.4zm-8 0c0 .874-1.04 1.33-1.68.731l-5.03-4.7a.997.997 0 0 1 0-1.46l5.03-4.7C6.959 1.974 8 2.428 8 3.302v9.4z"></svg:path>`,
})
export class QlementineIconsSeekBackward16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
