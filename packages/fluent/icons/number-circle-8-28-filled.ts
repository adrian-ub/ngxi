import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNumberCircle828FilledIcon],svg[fluent-number-circle-8-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2C7.373 2 2 7.373 2 14s5.373 12 12 12s12-5.373 12-12S20.627 2 14 2m0 6.5c-1.438 0-2.5 1.063-2.5 2.25S12.562 13 14 13s2.5-1.063 2.5-2.25S15.438 8.5 14 8.5m2.501 5.176C17.687 14.377 18.5 15.57 18.5 17c0 2.306-2.12 4-4.5 4s-4.5-1.694-4.5-4c0-1.429.813-2.623 1.999-3.324C10.593 12.998 10 11.955 10 10.75C10 8.624 11.848 7 14 7c2.151 0 4 1.624 4 3.75c0 1.205-.593 2.248-1.499 2.926M14 14.5c-1.761 0-3 1.217-3 2.5c0 1.284 1.239 2.5 3 2.5s3-1.216 3-2.5c0-1.283-1.239-2.5-3-2.5"></svg:path>`,
})
export class FluentNumberCircle828FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
