import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBread01Icon],svg[hugeicons-bread-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.194 14.077c-1.248 1.231-1.35 3.54-1.057 5.674c.265 1.935 2.442 2.848 4.075 1.825c2.987-1.87 6.106-4.334 9.095-7.281c3.07-3.028 4.753-5.334 6.237-7.927c.9-1.573.478-3.67-1.344-4.136c-1.995-.509-4.58-.3-6.862 1.846m-10.144 10c-.834-3.74 2.096-8.146 8.972-4.284m-8.972 4.283c.623.013 2.024.295 3.36 1.248m.292-7.13c.063-1.94 1.977-5.19 6.492-4.117m0 0c.966.23 2.052.657 3.264 1.338" color="currentColor"></svg:path>`,
})
export class HugeiconsBread01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
