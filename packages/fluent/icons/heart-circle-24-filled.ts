import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHeartCircle24FilledIcon],svg[fluent-heart-circle-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m-.304-5.144L7.59 12.064a2.46 2.46 0 0 1 3.583-3.367L12 9.5l.827-.803a2.461 2.461 0 0 1 3.583 3.367l-4.107 4.792a.4.4 0 0 1-.607 0"></svg:path>`,
})
export class FluentHeartCircle24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
