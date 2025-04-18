import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixChartLabelsFilledIcon],svg[ix-chart-labels-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 277.333V448H149.333L64 362.667l85.333-85.334zM448 64v170.667H149.333L64 149.333L149.333 64z"></svg:path>`,
})
export class IxChartLabelsFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
