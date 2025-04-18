import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentShareScreenPerson16FilledIcon],svg[fluent-share-screen-person-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 3A2.5 2.5 0 0 0 1 5.5v5A2.5 2.5 0 0 0 3.5 13h3.538A3 3 0 0 1 7 12.5a2.5 2.5 0 0 1 2.273-2.49a3 3 0 1 1 5.217-2.26c.011.138.122.25.26.25a.25.25 0 0 0 .25-.25V5.5A2.5 2.5 0 0 0 12.5 3zm10 5a2 2 0 1 1-4 0a2 2 0 0 1 4 0m1.5 4.5c0 1.245-1 2.5-3.5 2.5S8 13.75 8 12.5A1.5 1.5 0 0 1 9.5 11h4a1.5 1.5 0 0 1 1.5 1.5"></svg:path>`,
})
export class FluentShareScreenPerson16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
