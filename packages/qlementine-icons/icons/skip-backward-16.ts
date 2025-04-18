import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsSkipBackward16Icon],svg[qlementine-icons-skip-backward-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3a1 1 0 0 0-2 0v10a1 1 0 0 0 2 0zm7.3-.43c.639-.597 1.68-.143 1.68.731v9.4c0 .874-1.04 1.33-1.68.731l-5.03-4.7a.997.997 0 0 1 0-1.46l5.03-4.7z"></svg:path>`,
})
export class QlementineIconsSkipBackward16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
