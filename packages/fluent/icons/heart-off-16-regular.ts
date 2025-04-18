import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHeartOff16RegularIcon],svg[fluent-heart-off-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.452 11.16l3.694 3.694a.5.5 0 0 0 .708-.708l-13-13a.5.5 0 1 0-.708.708l1.946 1.945q-.075.066-.146.137a3.25 3.25 0 0 0 .012 4.595l4.707 4.708a.5.5 0 0 0 .707 0zm-.707-.708L8.02 12.178L3.665 7.824A2.25 2.25 0 0 1 3.8 4.508zm2.601-2.599L11.16 9.04l.707.707l1.188-1.188a3.25 3.25 0 0 0-.012-4.593a3.25 3.25 0 0 0-4.601-.012l-.447.448l-.454-.453a3.26 3.26 0 0 0-2.427-.956l1.385 1.386q.177.12.335.277l.81.809a.5.5 0 0 0 .715-.009l.79-.795a2.25 2.25 0 0 1 3.186.012a2.25 2.25 0 0 1 .011 3.181"></svg:path>`,
})
export class FluentHeartOff16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
