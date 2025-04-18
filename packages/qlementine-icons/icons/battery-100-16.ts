import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsBattery10016Icon],svg[qlementine-icons-battery-100-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1c1.66 0 3 1.34 3 3v9c0 1.66-1.34 3-3 3H6c-1.66 0-3-1.34-3-3V4c0-1.66 1.34-3 3-3M4 4c0-1.1.895-2 2-2h4c1.1 0 2 .895 2 2v9c0 1.1-.895 2-2 2H6c-1.1 0-2-.895-2-2z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M7 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"></svg:path>`,
})
export class QlementineIconsBattery10016Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
