import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconStudentIcon],svg[picon-student-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3h1v4m1-1V4h4v2M0 3l4-2l4 2l-4 2"></svg:path>`,
})
export class PiconStudentIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
