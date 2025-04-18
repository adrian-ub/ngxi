import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsWireless116Icon],svg[qlementine-icons-wireless-1-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6C5.91 6 4.06 7 2.9 8.55a.5.5 0 0 1-.8-.6C3.44 6.16 5.59 5 8 5s4.56 1.16 5.9 2.95a.5.5 0 0 1-.799.6A6.36 6.36 0 0 0 8.001 6z"></svg:path><svg:path fill="currentColor" d="M8 9c-1.27 0-2.39.608-3.1 1.55a.5.5 0 0 1-.8-.6a4.872 4.872 0 0 1 7.8 0a.5.5 0 0 1-.799.6A3.87 3.87 0 0 0 8.001 9zm0 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class QlementineIconsWireless116Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
