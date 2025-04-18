import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCodeText16RegularIcon],svg[fluent-code-text-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 3a.5.5 0 0 0 0 1H7a.5.5 0 0 0 0-1zm3 3a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zM3 9.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5M1.5 12a.5.5 0 0 0 0 1H9a.5.5 0 0 0 0-1zm9-5.5A.5.5 0 0 1 11 6h2.5a.5.5 0 0 1 0 1H11a.5.5 0 0 1-.5-.5M9.5 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentCodeText16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
