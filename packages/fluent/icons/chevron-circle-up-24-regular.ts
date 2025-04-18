import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChevronCircleUp24RegularIcon],svg[fluent-chevron-circle-up-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m0-1.5a8.5 8.5 0 1 1 0-17a8.5 8.5 0 0 1 0 17m-4.53-6.47a.75.75 0 0 0 1.06 0L12 10.56l3.47 3.47a.75.75 0 1 0 1.06-1.06l-4-4a.75.75 0 0 0-1.06 0l-4 4a.75.75 0 0 0 0 1.06"></svg:path>`,
})
export class FluentChevronCircleUp24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
