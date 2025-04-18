import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsMinusCircle24Icon],svg[qlementine-icons-minus-circle-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 11a.5.5 0 0 0 0 1h10a.5.5 0 0 0 0-1z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M23 11.5C23 17.85 17.85 23 11.5 23S0 17.85 0 11.5S5.15 0 11.5 0S23 5.15 23 11.5m-1 0C22 17.3 17.3 22 11.5 22S1 17.3 1 11.5S5.7 1 11.5 1S22 5.7 22 11.5" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsMinusCircle24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
