import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChevronCircleUp28RegularIcon],svg[fluent-chevron-circle-up-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 14c0 5.799 4.701 10.5 10.5 10.5S24.5 19.799 24.5 14S19.799 3.5 14 3.5S3.5 8.201 3.5 14M14 26C7.373 26 2 20.627 2 14S7.373 2 14 2s12 5.373 12 12s-5.373 12-12 12m-4.97-9.22a.75.75 0 0 1-1.06-1.06l5.5-5.5a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 1 1-1.06 1.06L14 11.81z"></svg:path>`,
})
export class FluentChevronCircleUp28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
