import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsWireless016Icon],svg[qlementine-icons-wireless-0-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.9 10.6c.708-.942 1.83-1.55 3.1-1.55s2.39.608 3.1 1.55a.5.5 0 0 0 .8-.6a4.872 4.872 0 0 0-7.8 0a.5.5 0 0 0 .799.6zM8 14a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class QlementineIconsWireless016Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
