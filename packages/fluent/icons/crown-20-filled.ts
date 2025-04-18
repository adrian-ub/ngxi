import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCrown20FilledIcon],svg[fluent-crown-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.737 5.31L6.609 8.046a.5.5 0 0 1-.619.14L3.865 7.123a1.5 1.5 0 1 0-1.672.845l1.692 8.04A1.25 1.25 0 0 0 5.11 17h9.782a1.25 1.25 0 0 0 1.224-.992l1.692-8.04a1.5 1.5 0 1 0-1.672-.845L14.01 8.186a.5.5 0 0 1-.619-.14l-2.128-2.737a1.5 1.5 0 1 0-2.526 0M10 14a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path>`,
})
export class FluentCrown20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
