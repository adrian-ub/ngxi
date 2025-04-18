import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsWirelessNone16Icon],svg[qlementine-icons-wireless-none-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.15 3.15a.5.5 0 0 1 .707 0l2.15 2.15l2.15-2.15a.5.5 0 0 1 .707.707l-2.15 2.15l2.15 2.15a.5.5 0 0 1-.707.707l-2.15-2.15l-2.15 2.15a.5.5 0 0 1-.707-.707l2.15-2.15l-2.15-2.15a.5.5 0 0 1 0-.707M9 13a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class QlementineIconsWirelessNone16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
