import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTextSubscriptIcon],svg[hugeicons-text-subscript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.5 21h-6m10-15c0-.628 0-.942-.08-1.217a2.04 2.04 0 0 0-1.166-1.29c-.265-.109-.566-.14-1.166-.2C12.67 3.146 10.888 3 9.5 3s-3.17.147-4.588.292c-.6.061-.9.092-1.166.2a2.04 2.04 0 0 0-1.165 1.29C2.5 5.059 2.5 5.373 2.5 6m7-2.651v17.5m12 .151h-2c-.471 0-.707 0-.854-.143c-.146-.144-.146-.374-.146-.836v-.944c0-.796.176-.952 1-.968c.777-.015 1.24-.07 1.56-.276c.44-.281.44-.735.44-1.641c0-1.733-3-1.066-3-1.066" color="currentColor"></svg:path>`,
})
export class HugeiconsTextSubscriptIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
