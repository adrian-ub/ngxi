import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNext48FilledIcon],svg[fluent-next-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M40.75 6c-.69 0-1.25.56-1.25 1.25v33.5a1.25 1.25 0 0 0 2.5 0V7.25C42 6.56 41.44 6 40.75 6M6 9.256c0-2.615 2.931-4.16 5.088-2.68l21.504 14.743c1.883 1.29 1.883 4.07 0 5.36L11.088 41.424C8.93 42.9 6 41.357 6 38.743z"></svg:path>`,
})
export class FluentNext48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
