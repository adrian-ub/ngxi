import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLaptopCloudIcon],svg[hugeicons-laptop-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 15v-3M4 15V7c0-1.886 0-2.828.586-3.414S6.114 3 8 3h3.5M3.498 16.015L4.02 15h15.932l.55 1.015c1.443 2.662 1.803 3.993 1.254 4.989s-2.002.996-4.91.996H7.154c-2.909 0-4.363 0-4.911-.996c-.549-.996-.19-2.327 1.254-4.989M13 6.667C13 7.955 14.007 9 15.25 9h4.725C21.093 9 22 8.06 22 6.9s-.907-2.1-2.025-2.1c-.02 0 0-2.8-2.475-2.8c-1.294 0-2.357 1.03-2.466 2.344C13.893 4.457 13 5.454 13 6.667" color="currentColor"></svg:path>`,
})
export class HugeiconsLaptopCloudIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
