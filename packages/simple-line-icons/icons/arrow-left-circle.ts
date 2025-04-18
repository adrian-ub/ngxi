import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleLineIconsArrowLeftCircleIcon],svg[simple-line-icons-arrow-left-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 0C229.216 0 0 229.232 0 512c0 282.784 229.216 512 512 512c282.768 0 512-229.216 512-512C1024 229.232 794.768 0 512 0m0 961.008c-247.024 0-448-201.984-448-449.01c0-247.024 200.976-448 448-448s448 200.977 448 448s-200.976 449.01-448 449.01m224.32-481.344H375.856l115.76-115.76c12.496-12.496 12.496-32.752 0-45.248s-32.752-12.496-45.248 0l-189.008 194l189.008 194c6.256 6.256 14.432 9.376 22.624 9.376s16.368-3.12 22.624-9.376c12.496-12.496 12.496-32.752 0-45.248l-117.76-117.744H736.32c17.68 0 32-14.336 32-32s-14.32-32-32-32"></svg:path>`,
})
export class SimpleLineIconsArrowLeftCircleIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
