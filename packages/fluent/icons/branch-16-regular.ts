import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBranch16RegularIcon],svg[fluent-branch-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 6a2.5 2.5 0 0 0-2.446 1.985C7.172 7.86 5.466 6.963 5.081 5.931a2.5 2.5 0 1 0-1.08.019v4.1a2.5 2.5 0 1 0 1 0V7.466a7 7 0 0 0 4.047 1.52A2.5 2.5 0 1 0 11.5 6M3 3.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0m3 9a1.5 1.5 0 1 1-2.999 0a1.5 1.5 0 0 1 3 0m5.5-2.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path>`,
})
export class FluentBranch16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
