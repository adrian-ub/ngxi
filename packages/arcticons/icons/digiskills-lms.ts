import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDigiskillsLmsIcon],svg[arcticons-digiskills-lms-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 24c0 10.217-8.283 18.5-18.5 18.5H5.5v-37H24c10.217 0 18.5 8.283 18.5 18.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.713 7.68L13.877 18.587c-2.094 1.213-2.812 3.9-1.603 6s3.887 2.82 5.982 1.608l7.583-4.392a4.37 4.37 0 0 1 5.981 1.607a4.4 4.4 0 0 1-1.602 6L7.62 42.5"></svg:path>`,
})
export class ArcticonsDigiskillsLmsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
