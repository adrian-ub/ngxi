import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLaptopPerson20FilledIcon],svg[fluent-laptop-person-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 5A1.5 1.5 0 0 0 3 6.5v6A1.5 1.5 0 0 0 4.5 14h7a2.5 2.5 0 0 1 1.773-.99A3 3 0 0 1 17 8.401V6.5A1.5 1.5 0 0 0 15.5 5zm-2 10h8.55q-.05.243-.05.5q0 .25.038.5H2.5a.5.5 0 0 1 0-1m15-4a2 2 0 1 1-4 0a2 2 0 0 1 4 0m1.5 4.5c0 1.245-1 2.5-3.5 2.5S12 16.75 12 15.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5"></svg:path>`,
})
export class FluentLaptopPerson20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
