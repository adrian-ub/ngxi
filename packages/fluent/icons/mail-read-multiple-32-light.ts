import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMailReadMultiple32LightIcon],svg[fluent-mail-read-multiple-32-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.253 4.065a.5.5 0 0 1 .494 0l9.115 5.18c.408.231.727.581.921.992L14.75 16.039a.5.5 0 0 1-.5 0L4.217 10.237c.194-.411.513-.76.921-.993zM4 11.267l9.75 5.637a1.5 1.5 0 0 0 1.5 0L25 11.267V19.5a3.5 3.5 0 0 1-3.5 3.5h-14A3.5 3.5 0 0 1 4 19.5zm11.241-8.071a1.5 1.5 0 0 0-1.482 0L4.644 8.375A3.25 3.25 0 0 0 3 11.2v8.3A4.5 4.5 0 0 0 7.5 24h14a4.5 4.5 0 0 0 4.5-4.5v-8.3a3.25 3.25 0 0 0-1.645-2.825zM7.671 26c.773.625 1.757 1 2.83 1h12a6.5 6.5 0 0 0 6.5-6.5v-6.15c0-.896-.37-1.74-1-2.345V20.5a5.5 5.5 0 0 1-5.5 5.5H7.67"></svg:path>`,
})
export class FluentMailReadMultiple32LightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
