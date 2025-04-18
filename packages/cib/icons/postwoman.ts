import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibPostwomanIcon],svg[cib-postwoman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.38 12.38C3.38 20.614 10.078 32 16 32c5.573 0 12.62-11.385 12.62-19.62C28.625 4.151 22.969 0 16 0S3.38 4.151 3.38 12.38m15.901 6.089a6.2 6.2 0 0 1 5.677-1.682a6.2 6.2 0 0 1-1.688 5.677a6.2 6.2 0 0 1-5.672 1.682a6.19 6.19 0 0 1 1.682-5.677zM7.042 16.786a6.2 6.2 0 0 1 5.677 1.682a6.19 6.19 0 0 1 1.682 5.677a6.2 6.2 0 0 1-5.672-1.682a6.2 6.2 0 0 1-1.688-5.677z"></svg:path>`,
})
export class CibPostwomanIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
