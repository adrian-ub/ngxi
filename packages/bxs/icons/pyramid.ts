import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsPyramidIcon],svg[bxs-pyramid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.445 21.832a1 1 0 0 0 1.11 0l9-6A1 1 0 0 0 21.8 14.4l-9-12c-.377-.504-1.223-.504-1.6 0l-9 12a1 1 0 0 0 .245 1.432zm8.12-7.078L12 19.798V4.667z"></svg:path>`,
})
export class BxsPyramidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
