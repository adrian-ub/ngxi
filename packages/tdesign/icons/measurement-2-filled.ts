import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMeasurement2FilledIcon],svg[tdesign-measurement-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 1.586L22.914 6L21.5 7.414l-2-2v13.172l2-2L22.914 18L18.5 22.414L14.086 18l1.414-1.414l2 2V5.414l-2 2L14.086 6zM2 2h10v20H2z"></svg:path>`,
})
export class TdesignMeasurement2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
