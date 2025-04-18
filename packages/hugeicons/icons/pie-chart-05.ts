import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPieChart05Icon],svg[hugeicons-pie-chart-05-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 12.822c0 5.93 4.82 10.75 10.75 10.75s10.75-4.82 10.75-10.75S17.93 2.072 12 2.072S1.25 6.892 1.25 12.822m10-9.22c-4.75.383-8.5 4.373-8.5 9.22s3.75 8.837 8.5 9.22v-3.519a5.76 5.76 0 0 1-5-5.7a5.76 5.76 0 0 1 5-5.702zm1.5 3.519V3.602c4.75.383 8.5 4.373 8.5 9.22s-3.75 8.837-8.5 9.22v-3.519a5.76 5.76 0 0 0 5-5.7a5.76 5.76 0 0 0-5-5.702M12 8.572a4.26 4.26 0 0 0-4.25 4.25a4.26 4.26 0 0 0 4.25 4.25a4.26 4.26 0 0 0 4.25-4.25A4.26 4.26 0 0 0 12 8.572" color="currentColor"></svg:path>`,
})
export class HugeiconsPieChart05Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
