import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPieChart04Icon],svg[hugeicons-pie-chart-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 12c0 5.93 4.82 10.75 10.75 10.75S22.75 17.93 22.75 12S17.93 1.25 12 1.25S1.25 6.07 1.25 12m10-9.22c-4.75.383-8.5 4.372-8.5 9.22s3.75 8.837 8.5 9.22zm1.5 18.44V2.78c4.75.383 8.5 4.372 8.5 9.22s-3.75 8.837-8.5 9.22" color="currentColor"></svg:path>`,
})
export class HugeiconsPieChart04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
