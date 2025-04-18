import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCourseFilledIcon],svg[tdesign-course-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 23h18V1H3zM14.002 6.688L11.504 8.75V3H16.5v5.75z"></svg:path>`,
})
export class TdesignCourseFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
