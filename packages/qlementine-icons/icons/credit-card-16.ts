import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsCreditCard16Icon],svg[qlementine-icons-credit-card-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H2C.9 2 0 2.897 0 4v8c0 1.1.897 2 2 2h12c1.1 0 2-.897 2-2V4c0-1.1-.897-2-2-2m1 10c0 .55-.45 1-1 1H2c-.55 0-1-.45-1-1V7h14zM1 4c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v1H1zm4 8H4a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1"></svg:path>`,
})
export class QlementineIconsCreditCard16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
