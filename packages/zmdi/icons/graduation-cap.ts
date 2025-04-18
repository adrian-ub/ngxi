import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiGraduationCapIcon],svg[zmdi-graduation-cap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m85 217l150 82l149-82v86l-149 81l-150-81zM235 0l234 128v171h-42V151L235 256L0 128z"></svg:path>`,
})
export class ZmdiGraduationCapIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}
