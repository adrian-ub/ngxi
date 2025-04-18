import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsPlus12Icon],svg[qlementine-icons-plus-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 2a.5.5 0 0 0-.5.5V5H2.5a.5.5 0 0 0 0 1H5v2.5a.5.5 0 0 0 1 0V6h2.5a.5.5 0 0 0 0-1H6V2.5a.5.5 0 0 0-.5-.5"></svg:path>`,
})
export class QlementineIconsPlus12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
