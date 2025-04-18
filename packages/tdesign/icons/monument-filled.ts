import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMonumentFilledIcon],svg[tdesign-monument-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 1v1h6V1h2v2.162l-1 3V15h1v3h2v5H5v-5h2v-3h1V6.162l-1-3V1zm5.28 4l.333-1H9.387l.334 1zM9 17v1h6v-1zm8 3H7v1h10z"></svg:path>`,
})
export class TdesignMonumentFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
