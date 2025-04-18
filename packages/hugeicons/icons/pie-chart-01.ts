import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPieChart01Icon],svg[hugeicons-pie-chart-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.712 11.277c.33.34.72.48 1.2.48l.01-.02c.72 0 1.66-.31 2.94-.74l2.64-.89c1.73-.58 2.78-.94 3.15-2.15c.369-1.217-.238-2.007-1.165-3.212l-.005-.008a12.7 12.7 0 0 0-2.23-2.22l-.012-.009c-1.194-.915-1.982-1.52-3.208-1.16c-1.21.37-1.57 1.419-2.16 3.179l-.88 2.62c-.72 2.13-1.11 3.3-.28 4.13m3.75-8.48c.08-.03.16-.04.24-.04l.01.01c.34 0 .71.25 1.63.96c.72.55 1.37 1.2 1.96 1.96c.87 1.13 1.04 1.41.91 1.85c-.14.46-.67.66-2.22 1.18l-2.62.88l-.109.036c-1.05.354-2.308.778-2.482.594c-.167-.168.287-1.53.626-2.546l.014-.044l.88-2.64c.52-1.55.73-2.07 1.16-2.2m-15.22 9.71c0 5.65 4.6 10.25 10.25 10.25s10.25-4.6 10.25-10.25c0-.41-.34-.75-.75-.75s-.75.34-.75.75c0 4.83-3.93 8.75-8.75 8.75s-8.75-3.92-8.75-8.75s3.93-8.75 8.75-8.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75c-5.65 0-10.25 4.6-10.25 10.25" color="currentColor"></svg:path>`,
})
export class HugeiconsPieChart01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
