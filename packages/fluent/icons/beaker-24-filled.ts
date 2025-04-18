import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBeaker24FilledIcon],svg[fluent-beaker-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4.5v6.238c0 .375-.094.744-.273 1.074L7.54 14h8.922l-1.188-2.188A2.25 2.25 0 0 1 15 10.738V4.5h1A.75.75 0 0 0 16 3H8a.75.75 0 0 0 0 1.5zm8.275 11H6.725l-1.582 2.915A1.75 1.75 0 0 0 6.68 21h10.638a1.75 1.75 0 0 0 1.538-2.585z"></svg:path>`,
})
export class FluentBeaker24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
