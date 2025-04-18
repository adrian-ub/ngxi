import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTarget24RegularIcon],svg[fluent-target-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.998 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-6-2a6 6 0 1 1 12 0a6 6 0 0 1-12 0m6-4.5a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9M1.996 12c0-5.524 4.478-10.002 10.002-10.002S22 6.476 22 12s-4.478 10.002-10.002 10.002S1.996 17.524 1.996 12m10.002-8.502a8.502 8.502 0 1 0 0 17.004a8.502 8.502 0 0 0 0-17.004"></svg:path>`,
})
export class FluentTarget24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
