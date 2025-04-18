import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsLableDuotoneIcon],svg[lets-icons-lable-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" stroke="currentColor"><svg:path fill-opacity=".25" d="M3 8c0-.943 0-1.414.293-1.707S4.057 6 5 6h10.93c.524 0 .786 0 1.007.118c.22.119.366.337.657.773l2.666 4c.359.537.538.806.538 1.109s-.18.572-.538 1.11l-2.666 4c-.29.435-.436.653-.657.772c-.221.118-.483.118-1.007.118H5c-.943 0-1.414 0-1.707-.293S3 16.943 3 16z"></svg:path><svg:circle cx="15" cy="12" r="1" stroke-width="1.4"></svg:circle></svg:g>`,
})
export class LetsIconsLableDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
