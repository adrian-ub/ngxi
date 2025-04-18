import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPieChart03Icon],svg[hugeicons-pie-chart-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25S22.75 6.07 22.75 12S17.93 22.75 12 22.75m9.22-11.5c-.363-4.503-3.967-8.107-8.47-8.47v8.47zm-8.47 1.5h8.47c-.363 4.503-3.967 8.107-8.47 8.47zm-1.5-.75V2.78c-4.75.383-8.5 4.372-8.5 9.22s3.75 8.837 8.5 9.22z" color="currentColor"></svg:path>`,
})
export class HugeiconsPieChart03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
