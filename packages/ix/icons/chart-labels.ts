import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixChartLabelsIcon],svg[ix-chart-labels-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 277.333V448H149.333L64 362.667l85.333-85.334zM405.333 320H166.997l-42.645 42.667l42.667 42.666h238.314zM448 64v170.667H149.333L64 149.333L149.333 64zm-42.667 42.667H166.997l-42.645 42.666L167.019 192h238.314z"></svg:path>`,
})
export class IxChartLabelsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
