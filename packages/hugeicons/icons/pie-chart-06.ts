import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPieChart06Icon],svg[hugeicons-pie-chart-06-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 12.822c0 5.93 4.82 10.75 10.75 10.75s10.75-4.82 10.75-10.75S17.93 2.072 12 2.072S1.25 6.892 1.25 12.822m10 9.22c-4.503-.363-8.107-3.966-8.47-8.47H6.3a5.76 5.76 0 0 0 4.951 4.951zm1.5 0c4.75-.383 8.5-4.372 8.5-9.22c0-5.1-4.15-9.25-9.25-9.25c-4.848 0-8.837 3.75-9.22 8.5H6.3a5.76 5.76 0 0 1 5.701-5c3.17 0 5.75 2.58 5.75 5.75a5.76 5.76 0 0 1-5 5.701zm-.75-4.97a4.26 4.26 0 0 0 4.25-4.25A4.26 4.26 0 0 0 12 8.572a4.26 4.26 0 0 0-4.25 4.25a4.26 4.26 0 0 0 4.25 4.25" color="currentColor"></svg:path>`,
})
export class HugeiconsPieChart06Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
