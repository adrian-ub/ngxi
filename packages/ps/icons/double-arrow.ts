import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psDoubleArrowIcon],svg[ps-double-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M165 10q-2-3-7-3h-19L11 95q-6 3-7.5 12T7 123q7 10 17 10q9 0 13-4l94-64v348l-94-64q-19-12-30 6q-11 20 6 30l128 85q2 0 2 3h22q2 0 2-3l128-85q19-10 6-30q-11-18-30-6l-93 64V67l93 64q5 2 9 2q9 0 17-8q11-20-6-30z"></svg:path>`,
})
export class PsDoubleArrowIcon {
  readonly viewBox = input("0 0 312 496")
  readonly width = input("0.63em")
  readonly height = input("1em")
}
