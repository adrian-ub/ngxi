import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCd16FilledIcon],svg[fluent-cd-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6a2 2 0 1 1 .001 3.999A2 2 0 0 1 8 6m0 3a1 1 0 1 1 0-2a1 1 0 0 1 0 2m0-7a6 6 0 1 0 0 12A6 6 0 0 0 8 2"></svg:path>`,
})
export class FluentCd16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
