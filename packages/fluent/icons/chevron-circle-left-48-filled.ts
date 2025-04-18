import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChevronCircleLeft48FilledIcon],svg[fluent-chevron-circle-left-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20s20-8.954 20-20S35.046 4 24 4m3.634 28.616a1.25 1.25 0 0 1-1.768 1.768l-9.5-9.5a1.25 1.25 0 0 1 0-1.768l9.5-9.5a1.25 1.25 0 0 1 1.768 1.768L19.018 24z"></svg:path>`,
})
export class FluentChevronCircleLeft48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
