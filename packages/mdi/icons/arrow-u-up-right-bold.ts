import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArrowUUpRightBoldIcon],svg[mdi-arrow-u-up-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 13.5V6h4v7.5c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5V11h-4l6-7l6 7h-4v2.5c0 4.14-3.36 7.5-7.5 7.5S3 17.64 3 13.5"></svg:path>`,
})
export class MdiArrowUUpRightBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
