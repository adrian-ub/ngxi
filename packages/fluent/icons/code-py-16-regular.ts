import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCodePy16RegularIcon],svg[fluent-code-py-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.75 4H3.5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-3h1.75A2.25 2.25 0 0 0 8 6.25A2.25 2.25 0 0 0 5.75 4m0 3.5H4V5h1.75A1.25 1.25 0 0 1 7 6.25A1.25 1.25 0 0 1 5.75 7.5m8.657-2.71L12 8.16v3.34a.5.5 0 0 1-1 0V8.16L8.593 4.79a.5.5 0 0 1 .294-.78a.5.5 0 0 1 .522.197L11.5 7.14l2.093-2.931a.5.5 0 1 1 .814.582"></svg:path>`,
})
export class FluentCodePy16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
