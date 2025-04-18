import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWarning16RegularIcon],svg[fluent-warning-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.75 10.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M7.5 8a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-1 0zm-.591-5.363a1.25 1.25 0 0 1 2.182 0l4.75 8.502a1.25 1.25 0 0 1-1.09 1.86H3.246a1.25 1.25 0 0 1-1.091-1.86zm1.309.488a.25.25 0 0 0-.437 0L3.03 11.627a.25.25 0 0 0 .218.372h9.503a.25.25 0 0 0 .218-.372z"></svg:path>`,
})
export class FluentWarning16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
