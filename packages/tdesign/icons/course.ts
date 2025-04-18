import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCourseIcon],svg[tdesign-course-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3h-2v6.5l-3-2.25l-3 2.25V3H5v18h14zm-6 0v2.5l1-.75l1 .75V3zm8 20H3V1h18z"></svg:path>`,
})
export class TdesignCourseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
