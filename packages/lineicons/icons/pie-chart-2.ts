import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsPieChart2Icon],svg[lineicons-pie-chart-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m-.75 1.533v8.156l-5.767 5.768A8.5 8.5 0 0 1 11.25 3.533M6.543 18.517l5.656-5.655l7.564 2.606A8.5 8.5 0 0 1 12 20.5a8.47 8.47 0 0 1-5.457-1.983m13.708-4.467l-7.501-2.585V3.533a8.5 8.5 0 0 1 7.5 10.517"></svg:path>`,
})
export class LineiconsPieChart2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
