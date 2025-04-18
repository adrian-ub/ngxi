import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNumberCircle448FilledIcon],svg[fluent-number-circle-4-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20m3.5-29.42V27.5h2.25a1.25 1.25 0 1 1 0 2.5H27.5v2.75a1.25 1.25 0 1 1-2.5 0V30h-8.442c-1.235 0-1.974-1.375-1.293-2.405l9.209-13.925c.902-1.364 3.026-.726 3.026.91M25 17.406V27.5h-6.675z"></svg:path>`,
})
export class FluentNumberCircle448FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
