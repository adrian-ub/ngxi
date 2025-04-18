import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsSlidersHorizontal24Icon],svg[qlementine-icons-sliders-horizontal-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 0a1 1 0 0 0-1 1v2H2.5a.5.5 0 0 0 0 1H13v2a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1m3 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5M7 9a1 1 0 0 1 2 0v5a1 1 0 0 1-2 0v-2H2.5a.5.5 0 0 1 0-1H7zm5 7a1 1 0 0 0-1 1v2H2.5a.5.5 0 0 0 0 1H11v2a1 1 0 0 0 2 0v-5a1 1 0 0 0-1-1m-1-4.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5m4.5 7.5a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class QlementineIconsSlidersHorizontal24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
