import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsCheckTick16Icon],svg[qlementine-icons-check-tick-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.7 4.19c.31.274.339.748.065 1.06l-5.75 6.5a.75.75 0 0 1-1.074.051l-3.75-3.5a.75.75 0 0 1 1.023-1.097l3.19 2.97l5.24-5.92a.75.75 0 0 1 1.06-.064z" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsCheckTick16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
