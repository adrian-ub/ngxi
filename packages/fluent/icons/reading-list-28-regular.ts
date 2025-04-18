import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentReadingList28RegularIcon],svg[fluent-reading-list-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.503 7.51a1.979 1.979 0 0 1 3.626-1.096a.75.75 0 1 0 1.248-.833a3.479 3.479 0 1 0-2.932 5.407a1 1 0 0 0 .134.012h15.672a.75.75 0 0 0 0-1.5H5.615a1 1 0 0 0-.134-.012A1.98 1.98 0 0 1 3.503 7.51M11.748 6a.75.75 0 0 0 0 1.5h13.5a.75.75 0 0 0 0-1.5zm-5 7.25a.75.75 0 0 0 0 1.5h18.5a.75.75 0 0 0 0-1.5zm-4.752 4.5a.75.75 0 0 1 .75-.75h18.5a.75.75 0 0 1 0 1.5h-18.5a.75.75 0 0 1-.75-.75m4.748 2.75a.75.75 0 0 0 0 1.5h18.5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class FluentReadingList28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
