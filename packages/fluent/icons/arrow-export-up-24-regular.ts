import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowExportUp24RegularIcon],svg[fluent-arrow-export-up-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.28 2.22a.75.75 0 0 0-1.06 0l-5 5a.75.75 0 0 0 1.06 1.06L11 4.56v13.69a.75.75 0 0 0 1.5 0V4.56l3.72 3.72a.75.75 0 1 0 1.06-1.06zM5.25 20.5a.75.75 0 0 0 0 1.5h13a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class FluentArrowExportUp24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
