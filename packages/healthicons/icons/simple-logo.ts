import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsSimpleLogoIcon],svg[healthicons-simple-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.089 29.344c0 8.033 6.472 14.546 14.455 14.546C32.528 43.89 39 37.377 39 29.344C39 18.435 24.544 3.89 24.544 3.89S10.09 18.435 10.09 29.344m20.286 4.114a1.755 1.755 0 0 1 2.471-.325a1.78 1.78 0 0 1 .323 2.486l-.242.318c-4.233 5.537-12.532 5.537-16.765 0l-.242-.318a1.78 1.78 0 0 1 .322-2.486a1.755 1.755 0 0 1 2.472.325l.242.318c2.822 3.691 8.355 3.691 11.177 0z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSimpleLogoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
