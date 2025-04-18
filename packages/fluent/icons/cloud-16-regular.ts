import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCloud16RegularIcon],svg[fluent-cloud-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3a3 3 0 0 0-3 3a.5.5 0 0 1-.5.5h-.25a2.25 2.25 0 0 0 0 4.5h7.5a2.25 2.25 0 0 0 0-4.5h-.25A.5.5 0 0 1 11 6a3 3 0 0 0-3-3M4.03 5.507a4 4 0 0 1 7.94 0A3.25 3.25 0 0 1 11.75 12h-7.5a3.25 3.25 0 0 1-.22-6.493"></svg:path>`,
})
export class FluentCloud16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
