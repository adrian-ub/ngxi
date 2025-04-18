import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoPieChart2Icon],svg[fontisto-pie-chart-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 11.981C.004 5.612 4.965.403 11.233.002L11.268 0v11.981c0 .139.038.269.105.379l-.002-.003l5.989 10.378A11.8 11.8 0 0 1 12 23.999c-6.627 0-12-5.373-12-12zm13.318.752H24a12 12 0 0 1-5.291 9.231l-.043.027zm-.548-1.503V0c6.04.388 10.842 5.19 11.229 11.194l.002.035z"></svg:path>`,
})
export class FontistoPieChart2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
