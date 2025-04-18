import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBeaker16FilledIcon],svg[fluent-beaker-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v3.689a2.5 2.5 0 0 1-.34 1.26L5.045 9h5.908l-.614-1.051a2.5 2.5 0 0 1-.34-1.26V3h.5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0 0 1zm5.537 7H4.463l-1.018 1.744A1.5 1.5 0 0 0 4.741 14h6.518a1.5 1.5 0 0 0 1.296-2.256z"></svg:path>`,
})
export class FluentBeaker16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
