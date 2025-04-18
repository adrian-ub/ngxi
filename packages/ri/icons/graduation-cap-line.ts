import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riGraduationCapLineIcon],svg[ri-graduation-cap-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 11.333L0 9l12-7l12 7v8.5h-2v-7.333l-2 1.166v6.678l-.223.275A9.98 9.98 0 0 1 12 22a9.98 9.98 0 0 1-7.777-3.714L4 18.011zM6 12.5v4.792A7.98 7.98 0 0 0 12 20a7.98 7.98 0 0 0 6-2.708V12.5L12 16zM3.97 9L12 13.685L20.03 9L12 4.315z"></svg:path>`,
})
export class RiGraduationCapLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
