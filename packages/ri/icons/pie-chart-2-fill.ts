import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riPieChart2FillIcon],svg[ri-pie-chart-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2.05V13h10.95c-.501 5.053-4.765 9-9.95 9c-5.523 0-10-4.477-10-10c0-5.185 3.947-9.449 9-9.95m2-1.507C18.554 1.02 22.979 5.447 23.457 11H13z"></svg:path>`,
})
export class RiPieChart2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
