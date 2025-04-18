import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsMoonHalfRight5Icon],svg[lineicons-moon-half-right-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.744 3.17a.75.75 0 0 0 .094.895A7.252 7.252 0 0 1 3.589 14.314a.75.75 0 0 0-1.236.74c1.13 4.286 5.03 7.446 9.67 7.446c5.523 0 10-4.477 10-10c0-4.64-3.16-8.541-7.445-9.67a.75.75 0 0 0-.834.34m2.678 2.055A8.5 8.5 0 1 1 4.749 16.9A8.752 8.752 0 0 0 16.423 5.225" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsMoonHalfRight5Icon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}
