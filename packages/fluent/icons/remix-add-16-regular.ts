import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRemixAdd16RegularIcon],svg[fluent-remix-add-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 1.5a.5.5 0 0 1 .5-.5H8q.752.002 1.46.152a7.01 7.01 0 0 1 5.504 6.132Q15 7.638 15 8a6.98 6.98 0 0 1-2.101 5h-1.581A6 6 0 0 0 8 2H1.5a.5.5 0 0 1-.5-.5M1 8a7 7 0 0 0 7 7h6.5a.5.5 0 0 0 0-1H8a6.01 6.01 0 0 1-6-6a6 6 0 0 1 2.682-5H3.101A6.98 6.98 0 0 0 1 8m7-3a.5.5 0 0 1 .5.5v2h2a.5.5 0 0 1 0 1h-2v2a.5.5 0 0 1-1 0v-2h-2a.5.5 0 0 1 0-1h2v-2A.5.5 0 0 1 8 5"></svg:path>`,
})
export class FluentRemixAdd16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
