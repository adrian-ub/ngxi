import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPieChart07Icon],svg[hugeicons-pie-chart-07-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 12.822c0 5.93 4.82 10.75 10.75 10.75s10.75-4.82 10.75-10.75S17.93 2.072 12 2.072S1.25 6.892 1.25 12.822m10-9.22c-4.503.364-8.107 3.967-8.47 8.47H6.3a5.76 5.76 0 0 1 4.951-4.951zm1.5 3.519V3.602c4.503.364 8.107 3.967 8.47 8.47H17.7a5.76 5.76 0 0 0-4.951-4.951M12 8.572a4.26 4.26 0 0 0-4.25 4.25a4.26 4.26 0 0 0 4.25 4.25a4.26 4.26 0 0 0 4.25-4.25A4.26 4.26 0 0 0 12 8.572m-9.22 5c.363 4.504 3.967 8.107 8.47 8.47v-3.519a5.76 5.76 0 0 1-4.951-4.95zm18.44 0c-.363 4.504-3.967 8.107-8.47 8.47v-3.519a5.76 5.76 0 0 0 4.951-4.95z" color="currentColor"></svg:path>`,
})
export class HugeiconsPieChart07Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
