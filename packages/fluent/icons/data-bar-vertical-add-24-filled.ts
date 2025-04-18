import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDataBarVerticalAdd24FilledIcon],svg[fluent-data-bar-vertical-add-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.25 3A2.25 2.25 0 0 0 16 5.25v5.924A6.5 6.5 0 0 1 17.498 11h.002c1.081 0 2.101.264 2.998.731V5.25A2.25 2.25 0 0 0 18.25 3m-4.252 6.25v2.772a6.5 6.5 0 0 0-3 5.478a6.47 6.47 0 0 0 1.012 3.485q-.128.015-.26.015a2.25 2.25 0 0 1-2.25-2.25v-9.5a2.25 2.25 0 1 1 4.498 0M3 13.25a2.25 2.25 0 1 1 4.498 0v5.5a2.25 2.25 0 1 1-4.498 0zm20 4.25a5.5 5.5 0 1 0-11 0a5.5 5.5 0 0 0 11 0m-5 .5l.001 2.503a.5.5 0 1 1-1 0V18h-2.505a.5.5 0 0 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.497a.5.5 0 0 1 0 1z"></svg:path>`,
})
export class FluentDataBarVerticalAdd24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
