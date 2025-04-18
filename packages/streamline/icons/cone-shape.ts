import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineConeShapeIcon],svg[streamline-cone-shape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.852 13.38c3.041 0 5.507-1.01 5.507-2.256S9.893 8.868 6.852 8.868c-3.042 0-5.508 1.01-5.508 2.256S3.81 13.38 6.852 13.38"></svg:path><svg:path d="M1.418 10.718L6.488.872c.174-.336.555-.336.728 0l5.07 9.85"></svg:path></svg:g>`,
})
export class StreamlineConeShapeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
